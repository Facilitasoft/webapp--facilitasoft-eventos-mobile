export const environment = {
  isEnvMode: false,
  isMockMode: false,
  production: false,
  env: 'local',
  services: {
    service_gestao_eventos: {
      host: "http://localhost:31000/service-gestao-eventos"
    }
  },
  frontend: {
    redirect: "http://localhost:4200"
  },
  keycloak: {
    realm: 'facilitasoft_login_unico',
    clientId: 'web--facilitasoft-gestao-eventos',
    redirect: 'https://sso.facilitasoft.com.br',
    url: 'https://sso.facilitasoft.com.br'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
