import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Tools } from './tools/tools';
import { Experience } from './experience/experience';
import { Education } from './education/education';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'hero', component: Hero },
  { path: 'header', component: Header },
  { path: 'tools', component: Tools },
  { path: 'experience', component: Experience },
  { path: 'education', component: Education },
  { path: 'projects', component: Projects },
  { path: 'contacts', component: Contact },
];
