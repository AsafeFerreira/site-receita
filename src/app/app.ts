import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { Footer } from "./shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly router = inject(Router);

  protected isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  protected isAuthRoute(): boolean {
    const url = this.router.url.split('?')[0];
    return url === '/login' || url === '/cadastro';
  }
}
