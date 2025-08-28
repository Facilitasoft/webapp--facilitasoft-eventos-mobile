import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Match {
  id: number;
  name: string;
  age: number;
  image: string;
  lastMessage?: string;
  isOnline: boolean;
  unreadCount: number;
}

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./match.html",
  styleUrls: [ "./match.css" ]
})
export class MatchesComponent {
  @Input() matches: Match[] = [];
  @Output() startChat = new EventEmitter<Match>();

  // Sample existing matches
  existingMatches: Match[] = [
    {
      id: 101,
      name: 'Ana',
      age: 25,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'Oi! Como você está? 😊',
      isOnline: true,
      unreadCount: 2
    },
    {
      id: 102,
      name: 'Beatriz',
      age: 27,
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
      lastMessage: 'Adorei suas fotos!',
      isOnline: false,
      unreadCount: 0
    }
  ];

  get newMatches() {
    return this.matches.filter(match => !match.lastMessage);
  }

  get allMatches() {
    return [...this.matches, ...this.existingMatches];
  }

  onMatchClick(match: Match) {
    this.startChat.emit(match);
  }
}
