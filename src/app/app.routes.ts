import { Routes } from '@angular/router';
import { AccesosComponent } from './accesos/accesos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'accesos', component: AccesosComponent },
    ],
  },
  { path: 'login', component: LoginComponent },

  // { path: 'config', component: ConfigComponent },
  { path: '**', redirectTo: '/' },
];
