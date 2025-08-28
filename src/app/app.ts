import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav';

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
    <!-- <header class="app-header">
      <img src="/public/favicon.ico" alt="Logotipo Facilitasoft" style="height: 38px; margin: 12px auto; display: block;" />
    </header> -->
    <div class="mb-5">
      <router-outlet style="display:block;"></router-outlet>
    </div>
    <app-bottom-nav></app-bottom-nav>
  `,
  styleUrls: ["./app.css"]
})
export class App { }
