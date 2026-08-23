import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styles: [`
    .cursor-blink {
      animation: blink 1s step-end infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  roles: string[] = ['Software Engineer', 'Full Stack Developer', '.NET Developer', 'Insurance Tech Consultant'];
  currentText: string = '';
  roleIndex: number = 0;
  charIndex: number = 0;
  isDeleting: boolean = false;
  timeoutId: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.typeEffect(); 
    } else {
      this.currentText = this.roles[0]; 
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  typeEffect() {
    const currentRole = this.roles[this.roleIndex];
    
    if (this.isDeleting) {
      this.currentText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.currentText === currentRole) {
      speed = 1500; 
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      speed = 500; 
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }
}