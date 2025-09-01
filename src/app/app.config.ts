import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from './environment/environment';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { KeycloakService } from 'keycloak-angular';
import { provideHttpClient } from '@angular/common/http';

function initializeKeycloak(keycloak: KeycloakService) {
  return () => {
    return keycloak.init({
      config: {
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
        redirectUri: environment.frontend.redirect + window.location.pathname + window.location.search,
        // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      },
      // enableBearerInterceptor: true,
      bearerExcludedUrls: ['/assets', '/clients/public'],
      updateMinValidity: 4,
      enableBearerInterceptor: true,
      // O método shouldAddToken é utilizado para verificar se a requisição deve ou não adicionar o token
      shouldAddToken: (request: any) => {
        const { method, url } = request;
        const isGetRequest = 'GET' === method.toUpperCase();
        const acceptablePaths = ['/assets', '/clients/public'];
        const isAcceptablePathMatch = acceptablePaths.some((path) =>
          url.includes(path)
        );

        return !(isGetRequest && isAcceptablePathMatch);
      },
      shouldUpdateToken(request: any) {
        return !request.headers.get('token-update') === false;
      },
      loadUserProfileAtStartUp: true
    });
  }
};

const provideKeycloak = () => {
  return {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloak(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideHttpClient()
  ]
};
