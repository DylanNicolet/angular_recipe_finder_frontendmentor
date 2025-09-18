import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Homepage } from './pages/homepage/homepage';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterOutlet,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_recipe_finder_frontendmentor');
}
