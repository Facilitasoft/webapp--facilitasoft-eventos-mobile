import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header";
import { EventoService } from '../../services/eventos';
import { EventoDTO } from '../../model/evento';

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
  sessaoSelecionada: any;

  constructor(private route: ActivatedRoute, private eventoService: EventoService) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.eventoId = id ? id : null;

    });
  }

  ngOnInit(): void {
    this.consultarDetalheEvento();
  }

  async consultarDetalheEvento() {
    if (this.eventoId) {
      const response = await this.eventoService.consultarDetalheEventoPublico(this.eventoId);
      if (response.sucessoResponse) {
        this.evento = response.data;
      }
      this.isLoading = false;
    }
  }

  abrirNoGoogleMaps() {

  }

  getImagem() {
    if(this.evento?.urlImagem) {
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

  selecionarSessao(index: number, sessao: any) {
    // mock: não faz nada
  }

  getIngressos() {
    // mock: retorna lista de ingressos fake
    return [
      {
        ingresso: { tituloIngresso: 'Pista', valorIngresso: 50, quantidadeDisponivel: 10 },
        quantidadeSolicitada: 0
      },
      {
        ingresso: { tituloIngresso: 'VIP', valorIngresso: 120, quantidadeDisponivel: 0 },
        quantidadeSolicitada: 0
      }
    ];
  }

  removerQuantidadeIngresso(ingresso: any) {
    if (ingresso.quantidadeSolicitada > 0) ingresso.quantidadeSolicitada--;
  }

  adicionarQuantidadeIngresso(ingresso: any) {
    if (ingresso.quantidadeSolicitada < ingresso.ingresso.quantidadeDisponivel) ingresso.quantidadeSolicitada++;
  }

  getValorTotalIngressos() {
    return this.getIngressos().reduce((total, i) => total + i.ingresso.valorIngresso * i.quantidadeSolicitada, 0);
  }

  temIngressosDisponiveis() {
    return this.getIngressos().some(i => i.ingresso.quantidadeDisponivel > 0);
  }

  comprarIngressos() {
    alert('Compra simulada!');
  }
}
