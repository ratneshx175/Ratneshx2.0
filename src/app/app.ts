import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'Ratneshx';
}
