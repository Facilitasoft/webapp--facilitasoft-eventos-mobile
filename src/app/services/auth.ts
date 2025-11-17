import { KeycloakService } from 'keycloak-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private keycloak: KeycloakService) { }

  async login(path: string | null): Promise<any> {
    if (path) {
      return await this.keycloak.login({ redirectUri: window.location.origin + path });
    }

    return await this.keycloak.login();
  }

  async updateToken(): Promise<any> {
    return await this.keycloak.updateToken(60);
  }

  async getToken(): Promise<any> {
    return await this.keycloak.getToken();
  }

  logout(path: string): void {
    if (path) {
      this.keycloak.logout(window.location.origin + path);
    } else {
      this.keycloak.logout();
    }
  }

  getUserProfile(): Promise<Keycloak.KeycloakProfile> {
    return this.keycloak.loadUserProfile();
  }

  async getNomeUsuario(): Promise<string | undefined> {
    try {
      return (await this.getUserProfile()).firstName;
    } catch(err) {
      console.error(err);
      return "";
    }
  }

  isAuthenticated(): boolean {
    return this.keycloak.isLoggedIn();
  }

  async refreshToken(minValidity = 60): Promise<void> {
    try {
      if (await this.keycloak.isLoggedIn()) {
        await this.keycloak.updateToken(minValidity);
      }
    } catch (error) {
      console.error('Erro ao atualizar o token:', error);
      this.logout("/"); // Se a renovação falhar, faz logout
    }
  }

}

