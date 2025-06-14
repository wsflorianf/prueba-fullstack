import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  navLinks = [
    { label: 'Inicio', icon: 'home', route: '/' },
    { label: 'Accesos', icon: 'users', route: '/accesos' },
    { label: 'Configuración', icon: 'cog', route: '/config' }
  ];

  sidenavOpened = true;

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  closeSidenav() {
    this.sidenavOpened = false;
  }
}