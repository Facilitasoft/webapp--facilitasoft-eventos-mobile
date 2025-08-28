import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header";

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './evento.html',
  styleUrls: ['./evento.css']
})
export class EventoComponent {
abrirNoGoogleMaps() {
throw new Error('Method not implemented.');
}
  // Propriedades mockadas para template
  eventoExiste = true;
  eventoPublico: any = {
    nomeEvento: 'Festival de Música Urbana',
    pathImagem: 'https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=400',
    idLocalEvento: 'PRESENCIAL',
    datasEvento: '10/09/2025',
    endereco: {
      nomeLocal: 'Arena Centro',
      logradouro: 'Rua das Flores',
      numero: '123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP'
    },
    descricaoEvento: 'Venha curtir os melhores artistas da cena urbana em um festival inesquecível!'
  };
  sessoesEvento = [
    {
      nomeDiaSemana: 'Sábado',
      dataPorExtenso: '10 de Setembro de 2025',
      horaInicioSessao: '18:00',
      horaFimSessao: '23:00',
      isSelected: false
    },
    {
      nomeDiaSemana: 'Domingo',
      dataPorExtenso: '11 de Setembro de 2025',
      horaInicioSessao: '16:00',
      horaFimSessao: '22:00',
      isSelected: false
    }
  ];
  sessaoSelecionada: any = null;

  isLoading() {
    return false;
  }
  eventoId: number | null = null;
  evento: any = null;

  // Exemplo de eventos, idealmente viria de um serviço
  eventos = [
    {
      id: 1,
      name: 'Festival de Música Urbana',
      date: '10/09/2025',
      description: 'Venha curtir os melhores artistas da cena urbana em um festival inesquecível!',
      image: 'https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=400',
      categories: ['Música', 'Festival']
    },
    {
      id: 2,
      name: 'Feira de Tecnologia e Inovação',
      date: '15/09/2025',
      description: 'Descubra as novidades do mundo tech e faça networking com profissionais da área.',
      image: 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=400',
      categories: ['Tecnologia', 'Inovação']
    },
    {
      id: 3,
      name: 'Workshop de Fotografia',
      date: '20/09/2025',
      description: 'Aprenda técnicas incríveis com fotógrafos renomados e pratique em ambientes inspiradores.',
      image: 'https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=400',
      categories: ['Fotografia', 'Arte']
    },
    {
      id: 4,
      name: 'Encontro de Yoga ao Ar Livre',
      date: '25/09/2025',
      description: 'Relaxe e conecte-se com a natureza em uma sessão especial de yoga para todos os níveis.',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400',
      categories: ['Yoga', 'Bem-estar']
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.eventoId = id ? +id : null;
      this.evento = this.eventos.find(e => e.id === this.eventoId);
    });
  }
  // Mock para template
  getDescricaoEventoSanitizada() {
    return this.evento?.description || '';
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
