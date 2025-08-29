import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    {
      company: 'Troposphere Solutions',
      role: 'Software Engineer',
      duration: 'Apr 2025 – Present',
      img: 'assets/tropo.png',
      points: [
        'Built COM plugin architecture with WPF interface',
        'Developed secure REST APIs with ASP.NET Core',
        'Implemented IoT messaging with MQTTnet & RabbitMQ',
      ],
    },
    {
      company: 'Wipro',
      role: '.NET Developer',
      duration: 'May 2022 – Apr 2025',
      img: 'assets/wipro.jpeg',
      points: [
        'Worked on Windows-based microscope image processing app',
        'Built REST APIs with JWT authentication',
        'Handled EF Core, SQL Server & Angular 14 frontend',
      ],
    },
  ];
}
