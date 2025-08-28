import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

interface Profile {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
  interests: string[];
}

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discovery.html',
  styleUrls: ['./discovery.css']
})
export class DiscoverComponent {
  @Output() newMatch = new EventEmitter<Profile>();

  profiles: Profile[] = [
    {
      id: 1,
      name: 'Sofia',
      age: 24,
      bio: 'Adoro conversas interessantes e momentos especiais ✨',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      interests: ['Arte', 'Música', 'Viagens']
    },
    {
      id: 2,
      name: 'Isabella',
      age: 26,
      bio: 'Procuro alguém para compartilhar momentos únicos 💫',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      interests: ['Fotografia', 'Dança', 'Culinária']
    },
    {
      id: 3,
      name: 'Camila',
      age: 22,
      bio: 'Vida é feita de momentos especiais e boas conversas 🌙',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      interests: ['Yoga', 'Literatura', 'Cinema']
    },
    {
      id: 4,
      name: 'Valentina',
      age: 28,
      bio: 'Sempre em busca de novas experiências e conexões 🔥',
      image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=400',
      interests: ['Fitness', 'Moda', 'Tecnologia']
    }
  ];

  constructor(private router: Router) { }

  goToProfile(id: number) {
    this.router.navigate(['/profile', id]);
  }
}
