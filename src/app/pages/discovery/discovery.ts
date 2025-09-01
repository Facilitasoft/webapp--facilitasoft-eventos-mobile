import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SkeletonListComponent } from '../../components/skeleton-list/skeleton-list';
import { Evento, EventoDTO } from '../../model/evento';
import { EventoService } from '../../services/eventos';


@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule, FormsModule, SkeletonListComponent],
  templateUrl: './discovery.html',
  styleUrls: ['./discovery.css']
})
export class DiscoverComponent implements OnInit {

  public isLoading: boolean = true;

  private events: Evento[] = [];

  constructor(private router: Router, private eventoService: EventoService) {}

  ngOnInit(): void {
    this.consultarEventos().finally(() => {
      this.isLoading = false;
    });
  }

  async consultarEventos() {
    const response = await this.eventoService.consultarEventosPublicos();
    if (!response.sucessoResponse) {
      alert("Ocorreu um erro ao tentar consultar os eventos. Atualize a página para tentar novamente.")
    }
    this.events = this.eventsFromResponse(response.data);
  }

  formatarDescricao(descricao: string): string {
    if (!descricao) return '';
    // Remove tags HTML
    let texto = descricao.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    // Remove entidades HTML (ex: &#129354;)
    texto = texto.replace(/&#\d+;/g, '');
    // Limita o tamanho
    return texto.length > 120 ? texto.slice(0, 120) + '...' : texto;
  }

  eventsFromResponse(data: EventoDTO[] | null): Evento[] {
    if (!data) { return [] };

    if (data != null && Array.isArray(data)) {
      return data?.map((response: EventoDTO) => {
        return {
          id: response.idEvento,
          name: response.nomeEvento,
          dataInicioEvento: response.dataHoraCadastro,
          dataFimEvento: response.dataHoraCadastro,
          description: response.descricaoEvento,
          urlImagem: response.urlImagem,
          categories: ["Teste"]
        }
      });
    }

    return [];
  }

  // filteredEvents(): Evento[] {
  //   const filter = this.filterText.trim().toLowerCase();
  //   if (!filter) return this.events;
  //   return this.events.filter(event =>
  //     event.name.toLowerCase().includes(filter) ||
  //     event.categories.some(cat => cat.toLowerCase().includes(filter))
  //   );
  // }

  getEvents() {
    return this.events;
  }

  goToEvent(id: string) {
    this.router.navigate(['/evento', id]);
  }

  getEventosResponse(eventos: EventoDTO[]): any {
    return eventos.map((evento: EventoDTO) => {
      return {
        id: evento.idEvento,
        name: evento.nomeEvento,
        date: null,
        description: evento.descricaoEvento,
        image: evento.urlImagem,
        categories: []
      }
    })
  }

}



