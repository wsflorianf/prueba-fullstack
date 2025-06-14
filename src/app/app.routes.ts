import { Routes } from '@angular/router';
import { AccesosComponent } from './accesos/accesos.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'accesos', component: AccesosComponent },
    // { path: 'config', component: ConfigComponent },
    { path: '**', redirectTo: '/' }
];
