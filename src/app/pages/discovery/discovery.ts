import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface Evento {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  categories: string[];
}

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './discovery.html',
  styleUrls: ['./discovery.css']
})
export class DiscoverComponent {
  filterText: string = '';
  events: Evento[] = [
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

  constructor(private router: Router) { }

  filteredEvents(): Evento[] {
    const filter = this.filterText.trim().toLowerCase();
    if (!filter) return this.events;
    return this.events.filter(event =>
      event.name.toLowerCase().includes(filter) ||
      event.categories.some(cat => cat.toLowerCase().includes(filter))
    );
  }

  goToEvent(id: number) {
    this.router.navigate(['/evento', id]);
  }
}
