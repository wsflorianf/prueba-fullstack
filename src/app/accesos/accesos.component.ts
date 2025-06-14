import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PermisosComponent } from './permisos/permisos.component';

@Component({
  selector: 'app-accesos',
  standalone: true,
  imports: [
    MatTabsModule,
    UsuariosComponent,
    PermisosComponent
  ],
  templateUrl: './accesos.component.html',
  styleUrl: './accesos.component.css'
})
export class AccesosComponent {

}
