import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Tools } from './tools/tools';
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, Tools, Experience, Education, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'Ratneshx';
}
