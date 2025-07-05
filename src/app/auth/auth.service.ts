import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { Router } from '@angular/router';

export interface User {
  username: string;
  token: string;
  roles: string[];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<User | null>(this.loadUser());

  private loadUser(): User | null {
    const data = localStorage.getItem('auth_user');
    return data ? JSON.parse(data) : null;
  }

  private saveUser(user: User | null) {
    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('auth_user');
    }
  }

  constructor(private http: HttpClient, private router: Router) {
    // Initialize user from local storage
  }

  login(username: string, password: string) {
    this.http.post<User>(environment.apiUrl+'/auth/login', { username, password }).subscribe({
      next: (user) => {
        this.userSignal.set(user);
        this.saveUser(user);
        this.router.navigate(['/']);
      },
    });
    this
  }

  logout() {
    this.userSignal.set(null);
    this.saveUser(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.userSignal();
  }

  hasRole(role: string): boolean {
    const user = this.userSignal();
    return !!user && user.roles.includes(role);
  }

  getUser(): User | null {
    return this.userSignal();
  }

  user$ = this.userSignal.asReadonly();
}
