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
    { name: '.NET', img: 'assets/tools/dotnet.png' },
    { name: 'C#', img: 'assets/tools/csharp.png' },
    { name: 'Angular', img: 'assets/tools/angular.png' },
    { name: 'WPF', img: 'assets/tools/wpf.png' },
    { name: 'ASP.NET Core', img: 'assets/tools/aspnet.png' },
    { name: 'SQL Server', img: 'assets/tools/sql.png' },
    { name: 'Azure', img: 'assets/tools/azure.png' },
    { name: 'RabbitMQ', img: 'assets/tools/rabbitmq.png' },
  ];
}
