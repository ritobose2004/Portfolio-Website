import { Directive, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective implements OnInit {
  constructor(
    private el: ElementRef, 
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const VanillaTilt = (await import('vanilla-tilt')).default;
      VanillaTilt.init(this.el.nativeElement, {
        max: 12,              
        speed: 400,           
        glare: true,          
        'max-glare': 0.15,   
        scale: 1.02          
      });
    }
  }
}