import { Component } from '@angular/core';
import { TiltDirective } from '../../directives/tilt.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TiltDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project Requirement Management System',
      highlights: [
        'Architected full-stack enterprise web app using Controller–Service–Repository layered architecture.',
        'Implemented Angular Auth Guards and JWT role authorization to secure frontend routing and API endpoints.',
        'Built modular, reusable Angular components with high-performance backend services handling complex SQL Queries.'
      ],
      tags: ['C#', 'ASP.NET Core', 'EF Core', 'Angular', 'SQL Server'],
      link: '#',
      github: 'https://github.com/ritobose2004/Project-Requirement-Analysis_-DOTNET-FS-Project'
    },
    {
      title: 'EcoSaviour – Smart Waste Classification, Management & Carbon Tracker',
      highlights: [
        'Led frontend UI/UX using Next.js and Tailwind CSS for an AI-powered carbon footprint and waste management platform.',
        'Integrated supervised ML algorithms for smart waste classification and tracking.',
        'Contributed to LLM-based voice assistant features, demonstrating expertise in full-stack development and AI solutions.'
      ],
      tags: ['Next.js', 'Tailwind CSS', 'ML (Supervised)', 'LLMs'],
      link: '#',
      github: 'https://github.com/ritobose2004/EcoSaviour--Carbon-Footprint-calculator-Smart-Waste-Management-Spread-Awareness'
    }
  ];
}
