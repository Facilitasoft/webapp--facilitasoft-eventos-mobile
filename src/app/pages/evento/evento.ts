import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header";
import { EventoDTO, SessaoDTO, TipoIngressoDTO } from '../../model/evento';
import { AuthService } from '../../services/auth';
import { EventoService } from '../../services/eventos';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './evento.html',
  styleUrls: ['./evento.css']
})
export class EventoComponent implements OnInit {

  isLoading: boolean = true;
  eventoId: string | null = null;
  evento: EventoDTO | null = null;
  sessaoSelecionada: SessaoDTO | null = null;
  ingressosSelecionados: { [idTipoIngresso: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private eventoService: EventoService,
    private authService: AuthService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.eventoId = id ? id : null;
    });
  }

  ngOnInit(): void {
    this.consultarDetalheEvento();
    let isAuth = this.authService.isAuthenticated();
    if (!isAuth) {
      console.log("aquiiii")
    }
  }

  async consultarDetalheEvento() {
    if (this.eventoId) {
      ''
      const response = await this.eventoService.consultarDetalheEventoPublico(this.eventoId);
      if (response.sucessoResponse) {
        this.evento = response.data;
      } else {
        alert("Erro - " + response.errorMessage)
      }
      this.isLoading = false;
    }
  }

  abrirNoGoogleMaps() {

  }

  getImagem() {
    if (this.evento?.urlImagem) {
      return this.evento.urlImagem;
    } else {
      return "assets/evento_sem_imagem.png";
    }
  }

  // Mock para template
  getDescricaoEventoSanitizada() {
    return this.evento?.descricaoEvento || '';
  }

  isCompraIngressoDisponivel() {
    return true;
  }

  scrollToIngressos(event: Event) {
    event.preventDefault();
    // mock: não faz nada
  }

  selecionarSessao(sessao: SessaoDTO) {
    if (this.evento?.sessoes) {
      this.evento.sessoes.forEach(s => s.isSelected = false);
    }
    sessao.isSelected = true;
    this.sessaoSelecionada = sessao;
    // Resetar seleção de ingressos ao trocar de sessão
    this.ingressosSelecionados = {};
  }

  getIngressos() {
    if (!this.sessaoSelecionada) return [];
    return this.sessaoSelecionada.tiposIngresso.map((ingresso: TipoIngressoDTO) => ({
      ingresso,
      quantidadeSolicitada: this.ingressosSelecionados[ingresso.idTipoIngresso] || 0
    }));
  }

  removerQuantidadeIngresso(ingresso: any) {
    const id = ingresso.ingresso.idTipoIngresso;
    if ((this.ingressosSelecionados[id] || 0) > 0) {
      this.ingressosSelecionados[id]--;
    }
  }

  adicionarQuantidadeIngresso(ingresso: any) {
    const id = ingresso.ingresso.idTipoIngresso;
    if ((this.ingressosSelecionados[id] || 0) < ingresso.ingresso.quantidadeDisponivel) {
      this.ingressosSelecionados[id] = (this.ingressosSelecionados[id] || 0) + 1;
    }
  }

  getValorTotalIngressos() {
    return this.getIngressos().reduce((total, i) => total + i.ingresso.preco * i.quantidadeSolicitada, 0);
  }

  temIngressosDisponiveis() {
    return this.getIngressos().some(i => i.ingresso.quantidadeDisponivel > 0);
  }

  doLogin() {
    this.authService.login(null);
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  comprarIngressos() {
    let isAuth = this.authService.isAuthenticated();
    if (!isAuth) {
      return;
    }
    const ingressosArray = Object.entries(this.ingressosSelecionados)
      .filter(([_, quantidade]) => quantidade > 0)
      .map(([idIngresso, quantidadeSolicitada]) => ({ idIngresso, quantidadeSolicitada }));
    const payload = {
      cartId: "e87b5b28-0f8c-415d-9ceb-464c82b8c032",
      idSessao: this.sessaoSelecionada?.idSessao,
      idEvento: this.eventoId,
      ingressos: ingressosArray
    };
    this.eventoService.reservarIngressos(payload);
  }

}
