import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {NotFoundComponent} from './public/pages/not-found/not-found.component';
import {DonateComponent} from './donations/pages/donate/donate.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'engagement/donations/new', component: DonateComponent},
  { path: '**', component: NotFoundComponent }
];
