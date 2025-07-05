import { Routes } from '@angular/router';
import { AccesosComponent } from './accesos/accesos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './auth/guards/auth.guard';
import { noAuthGuard } from './auth/guards/noAuth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', component: InicioComponent },
      { 
        path: 'accesos', 
        component: AccesosComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },

  // { path: 'config', component: ConfigComponent },
  { path: '**', redirectTo: '/' },
];
