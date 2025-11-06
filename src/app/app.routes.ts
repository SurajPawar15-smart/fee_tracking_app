import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { Layout } from '../pages/layout/layout';
import { Master } from '../pages/master/master/master';
import { authGuard } from '../core/guard/auth-guard';
import { PackageMaster } from '../pages/package-master/package-master';
import { InstituteMaster } from '../pages/institute-master/institute-master';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout, //canActivate:[authGuard] ,
    children: [
      { path: 'master', component: Master },
      { path: 'package-master', component: PackageMaster },
      { path: 'institute-master', component: InstituteMaster },
    ],
  },
];
