import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./bottom-nav.html",
  styleUrls: [
    "./bottom-nav.css"
  ]
})
export class BottomNavComponent {
  tabs = [
    { id: 'discover', icon: '🎉', label: 'Eventos', route: '/' },
    { id: 'criarEvento', icon: '🗓️', label: 'Meus eventos', route: '/meus_eventos' },
    { id: 'ingressos', icon: '🎟️', label: 'Ingressos', route: '/ingressos' },
    { id: 'profile', icon: '👤', label: 'Perfil', route: '/profile/my' }
  ];

  constructor(private router: Router) { }

  onTabClick(tabId: string) {
    const tab = this.tabs.find(t => t.id === tabId);
    if (tab) {
      this.router.navigate([tab.route]);
    }
  }
}
