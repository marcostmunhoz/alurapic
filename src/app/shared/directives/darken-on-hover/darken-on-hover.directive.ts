import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseover')
  darkenOn() {
    this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

}
