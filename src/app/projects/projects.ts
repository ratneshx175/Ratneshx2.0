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
      img: 'assets/projects/portfolio.png', // 🔗 Replace with your image
      github: 'https://github.com/ratneshx175/portfolio',
      demo: 'https://ratneshx175.github.io/',
    },
    {
      title: 'E-Commerce Website',
      desc: 'E-commerce site with CRUD product management, authentication, and SQL backend.',
      img: 'assets/projects/ecommerce.png', // 🔗 Replace with your image
      github: 'https://github.com/ratneshx175/ecommerce',
      demo: 'https://ecommerce-demo.com/',
    },
    {
      title: 'Webcam App',
      desc: 'Desktop app built with WPF & OpenCV for capturing photos, videos, and applying filters.',
      img: 'assets/projects/webcam.png', // 🔗 Replace with your image
      github: 'https://github.com/ratneshx175/webcam-app',
      demo: 'https://webcam-demo.com/',
    },
  ];
}
