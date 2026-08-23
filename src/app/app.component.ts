import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular'; 
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, NgxParticlesModule, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  private isBrowser: boolean;

  // 3. Inject the NgParticlesService
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private ngParticlesService: NgParticlesService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.ngParticlesService.init(async (engine: Engine) => {
        await loadSlim(engine);
      });
      import('aos').then(AOS => {
        AOS.default.init({
          duration: 800,  
          once: true,     
          offset: 100,    
        });
      });
    }
  }

  particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
      },
      modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
    },
    particles: {
      color: { value: '#4F46E5' }, 
      links: { color: '#8a9ab0', distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { direction: 'none' as const, enable: true, speed: 1, outModes: { default: 'bounce' as const } },
      number: { density: { enable: true, area: 800 }, value: 40 },
      opacity: { value: 0.3 },
      shape: { type: 'circle' as const },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
}
