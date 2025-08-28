import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  id: number;
  text: string;
  isFromUser: boolean;
  timestamp: Date;
  isTyping?: boolean;
}

interface Match {
  id: number;
  name: string;
  image: string;
  isOnline: boolean;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./chat.html",
  styleUrls: [
    "./chat.css"
  ]
})
export class ChatComponent implements OnInit {
  @Input() selectedMatch: Match | null = null;

  messages: Message[] = [];
  newMessage = '';
  isTyping = false;

  private messageId = 1;

  // Sample conversation starters
  private responses = [
    'Oi! Que bom te conhecer 😊',
    'Adorei seu perfil! Me conta mais sobre você',
    'Que coincidência incrível darmos match! ✨',
    'Você tem um sorriso lindo 😍',
    'O que você gosta de fazer nas horas vagas?',
    'Estou curiosa para te conhecer melhor 💫',
    'Você parece uma pessoa muito interessante!',
    'Me conta sobre seus hobbies favoritos 🌟'
  ];

  ngOnInit() {
    if (this.selectedMatch) {
      // Start with a welcome message after a short delay
      setTimeout(() => {
        this.simulateTyping().then(() => {
          this.addMessage(this.getRandomResponse(), false);
        });
      }, 1000);
    }
  }

  sendMessage() {
    if (!this.newMessage.trim() || this.isTyping) return;

    this.addMessage(this.newMessage, true);
    const userMessage = this.newMessage;
    this.newMessage = '';

    // Simulate response
    setTimeout(() => {
      this.simulateTyping().then(() => {
        const response = this.generateResponse(userMessage);
        this.addMessage(response, false);
      });
    }, 1000 + Math.random() * 2000);
  }

  private addMessage(text: string, isFromUser: boolean) {
    this.messages.push({
      id: this.messageId++,
      text,
      isFromUser,
      timestamp: new Date()
    });
    this.scrollToBottom();
  }

  private async simulateTyping(): Promise<void> {
    this.isTyping = true;

    // Add typing indicator
    const typingMessage: Message = {
      id: this.messageId++,
      text: '',
      isFromUser: false,
      timestamp: new Date(),
      isTyping: true
    };

    this.messages.push(typingMessage);
    this.scrollToBottom();

    // Wait for 1-3 seconds
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Remove typing indicator
    this.messages = this.messages.filter(m => !m.isTyping);
    this.isTyping = false;
  }

  private getRandomResponse(): string {
    return this.responses[Math.floor(Math.random() * this.responses.length)];
  }

  private generateResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('oi') || lowerMessage.includes('olá')) {
      return 'Oi! Como está sendo seu dia? 😊';
    } else if (lowerMessage.includes('tudo bem')) {
      return 'Tudo ótimo! E você, como está? ✨';
    } else if (lowerMessage.includes('trabalho')) {
      return 'Que interessante! Me conta mais sobre o que você faz 🌟';
    } else if (lowerMessage.includes('hobby') || lowerMessage.includes('gosto')) {
      return 'Adorei! Temos algo em comum então 💫';
    } else {
      return this.getRandomResponse();
    }
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  trackMessage(index: number, message: Message): number {
    return message.id;
  }

  private scrollToBottom() {
    setTimeout(() => {
      const container = document.querySelector('.messages-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    });
  }
}
