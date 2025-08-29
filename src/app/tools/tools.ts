import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tools.html',
  styleUrl: './tools.css',
})
export class Tools {
  tools = [
    { name: '.NET', img: 'assets/dotnet.png' },
    { name: 'C#', img: 'assets/csharp.jpg' },
    { name: 'Angular', img: 'assets/angular.png' },
    { name: 'WPF', img: 'assets/wpf.png' },
    { name: 'ASP.NET Core', img: 'assets/asp.jpg' },
    { name: 'SQL Server', img: 'assets/sql.jpg' },
    { name: 'Azure', img: 'assets/azure.png' },
    { name: 'RabbitMQ', img: 'assets/rabbit.png' },
  ];
}
