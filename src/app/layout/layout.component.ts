import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRippleModule

  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  navLinks = [
    { label: 'Inicio', icon: 'home', route: '/' },
    { label: 'Accesos', icon: 'lock_person', route: '/accesos' },
    { label: 'Configuración', icon: 'settings', route: '/config' }
  ];

  sidenavOpened = true;

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  closeSidenav() {
    this.sidenavOpened = false;
  }

  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const root = document.documentElement;
    if (this.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}