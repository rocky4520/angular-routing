import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any = null;

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    this.signOut();
  }

  login({ email, password }: any): Observable<any> {
    // Regular user login
    if (email === 'user@gmail.com' && password === 'user123') {
      this.setToken('user-token-abcdefghijklmnopqrstuvwxyz');
      this.currentUser = {
        id: 'user123',
        name: 'Urva Patel',
        email: 'user@gmail.com',
        username: 'urva_user',
        role: 'user',
      };
      return of(this.currentUser);
    }

    // Admin login
    if (email === 'admin@gmail.com' && password === 'admin4520') {
      this.setToken('admin-token-abcdefghijklmnopqrstuvwxyz');
      this.currentUser = {
        id: 'admin123',
        name: 'Admin User',
        email: 'admin@gmail.com',
        username: 'admin_master',
        role: 'admin',
      };
      return of(this.currentUser);
    }

    return throwError(() => new Error('Invalid credentials'));
  }

  // ✅ Mock Supabase-style session
  get session() {
    if (this.isLoggedIn()) {
      return { user: this.currentUser };
    }
    return null;
  }

  // ✅ Mock profile method
  profile(user: any): Promise<{ data: { username: string } }> {
    return Promise.resolve({
      data: {
        username: user.username,
      },
    });
  }

  // ✅ signOut method like Supabase
  signOut(): void {
    this.currentUser = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // ✅ Mock stats for dashboard
  getStats(): Promise<{ totalUsers: number; activeUsers: number; revenue: number; orders: number }> {
    return Promise.resolve({
      totalUsers: 120,
      activeUsers: 87,
      revenue: 50230,
      orders: 325,
    });
  }
}
