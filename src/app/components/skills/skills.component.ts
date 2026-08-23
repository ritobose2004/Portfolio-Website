import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,RouterModule, TiltDirective],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills = [
    { title: 'Angular.js', desc: 'Building dynamic, responsive SPAs with components & services.', iconClass: 'text-red-500 bg-red-500/10', symbol: 'A' },
    { title: '.NET / C#', desc: 'Robust backend APIs using ASP.NET Core & EF Core.', iconClass: 'text-blue-500 bg-blue-500/10', symbol: '◆' },
    { title: 'SQL Server', desc: 'Designing schemas, queries and stored procedures.', iconClass: 'text-gray-400 bg-gray-400/10', symbol: '⛁' },
    { title: 'REST APIs', desc: 'Secure, scalable APIs with JWT authentication.', iconClass: 'text-green-400 bg-green-400/10', symbol: '🔗' },
    { title: 'C++ / DSA', desc: 'Strong problem-solving and data structure skills.', iconClass: 'text-blue-400 bg-blue-400/10', symbol: '💻' },
    { title: 'Insurance Tech', desc: 'Duck Creek, policy, claims, billing & rating concepts.', iconClass: 'text-indigo-400 bg-indigo-400/10', symbol: '🛡️' },
    { title: 'HTML / CSS / JS', desc: 'Modern, glassmorphic and responsive UI design.', iconClass: 'text-orange-400 bg-orange-400/10', symbol: '🎨' },
    { title: 'DevOps', desc: 'End-to-end application development & deployment.', iconClass: 'text-slate-400 bg-slate-400/10', symbol: '⚙️' }
  ];
}