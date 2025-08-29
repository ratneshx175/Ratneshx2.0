import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  projects = [
    {
      title: 'Personal Portfolio',
      desc: 'An interactive portfolio showcasing my skills, projects, and experiences.',
      img: 'assets/portfolio.png', // 🔗 Replace with your image
      github: 'https://github.com/ratneshx175/Ratneshx2.0',
      demo: 'https://ratneshx.netlify.app/',
    },
    {
      title: 'E-Commerce Website',
      desc: 'E-commerce site with CRUD product management, authentication, and SQL backend.',
      img: 'assets/kent.png', // 🔗 Replace with your image
      github: 'https://github.com/ratneshx175/KajalEnterprises',
      demo: 'https://kentdummy.bsite.net/',
    },
    {
      title: 'Webcam App',
      desc: 'Desktop app built with WPF & OpenCV for capturing photos, videos, and applying filters.',
      img: 'assets/web.png', // 🔗 Replace with your image
      github: 'https://github.com/ratneshx175/WebCAM',
      demo: 'https://github.com/ratneshx175/WebCAM',
    },
  ];
}
