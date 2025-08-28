import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav';
import { HeaderComponent } from './components/header/header';
import { MatchesComponent } from './components/match/match';
import { ChatComponent } from './pages/chat/chat';
import { DiscoverComponent } from './pages/discovery/discovery';

interface Match {
  id: number;
  name: string;
  age: number;
  image: string;
  isOnline: boolean;
  unreadCount: number;
  lastMessage?: string;
}

// ...existing code...
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      CommonModule,
      RouterOutlet,
      BottomNavComponent
    ],
    template: `
    <app-bottom-nav></app-bottom-nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ["./app.css"]
  })
export class App { }
