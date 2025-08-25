import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';

export const routes: Routes = [
  { path: 'hero', component: Hero },
  { path: 'header', component: Header },
];
