// src/app/directives/fade-in-on-scroll.directive.ts

import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]'
})
export class FadeInOnScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    const componentPosition = this.el.nativeElement.offsetTop;
    const componentHeight = this.el.nativeElement.offsetHeight;

    if (scrollPosition > componentPosition - window.innerHeight + componentHeight) {
      this.renderer.addClass(this.el.nativeElement, 'fade-in');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'fade-in');
    }
  }
}
