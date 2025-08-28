import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.html",
  styleUrls: [ './login.css' ]
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();

  email = '';
  password = '';
  showError = false;
  isLoading = false;

  onLogin() {
    if (!this.email || !this.password) {
      this.showError = true;
      return;
    }

    this.isLoading = true;
    this.showError = false;

    // Simulate login process
    setTimeout(() => {
      this.isLoading = false;
      this.loginSuccess.emit();
    }, 2000);
  }

  onSocialLogin(provider: string) {
    this.isLoading = true;

    // Simulate social login
    setTimeout(() => {
      this.isLoading = false;
      this.loginSuccess.emit();
    }, 1500);
  }

  onSignup(event: Event) {
    event.preventDefault();
    // For now, just proceed to login
    this.loginSuccess.emit();
  }
}
