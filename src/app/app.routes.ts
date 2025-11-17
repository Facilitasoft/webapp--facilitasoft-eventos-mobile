
import { Routes } from '@angular/router';
import { DiscoverComponent } from './pages/discovery/discovery';
import { EventoComponent } from './pages/evento/evento';
import { Profile } from './pages/profile/profile';
// import { FavoritosComponent } from './pages/favoritos/favoritos';
// import { IngressosComponent } from './pages/ingressos/ingressos';

export const routes: Routes = [
  { path: '', component: DiscoverComponent },
  { path: 'evento/:id', component: EventoComponent },
  { path: 'evento/:id/checkout/:idPedido', component: EventoComponent },
  // { path: 'favoritos', component: FavoritosComponent },
  // { path: 'ingressos', component: IngressosComponent },
  { path: 'profile/:id', component: Profile }
];
