import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { About } from './pages/about/about';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';

export const routes: Routes = [
  {
    path: 'home', // ko code /home
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'stories',
    component: Stories,
  },
  {
    path: 'add-story',
    component: AddStory,
  },
];
