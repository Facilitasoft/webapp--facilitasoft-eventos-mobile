import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProfileData {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
  interests: string[];
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  user: ProfileData | undefined;

  private profiles: ProfileData[] = [
    {
      id: 1,
      name: 'Sofia',
      age: 24,
      bio: 'Adoro conversas interessantes e momentos especiais ✨',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      interests: ['Arte', 'Música', 'Viagens', 'Fotografia']
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

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.user = this.profiles.find(p => p.id === id);
    });
  }
}
