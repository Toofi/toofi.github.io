import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    title: 'Landing Page'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Me'
  }
];
