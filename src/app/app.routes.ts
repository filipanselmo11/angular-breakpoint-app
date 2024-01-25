import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home Page'
    },
    {
      path: 'layout',
      component: LayoutComponent,
      title: 'Layout Page'
    },
];
