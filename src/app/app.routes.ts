import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { Layout } from '../pages/layout/layout';
import { Master } from '../pages/master/master/master';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: '', component: Layout, children: [{ path: 'master', component: Master }] },
];
