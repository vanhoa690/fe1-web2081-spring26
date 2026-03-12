import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: 'home', // ko code /home
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
