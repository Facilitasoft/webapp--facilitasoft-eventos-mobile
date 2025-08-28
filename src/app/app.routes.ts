import { Routes } from '@angular/router';
import { DiscoverComponent } from './pages/discovery/discovery';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
	{ path: '', component: DiscoverComponent },
	{ path: 'profile/:id', component: Profile }
];
