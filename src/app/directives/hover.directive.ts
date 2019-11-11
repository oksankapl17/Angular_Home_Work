import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @HostBinding('style.background') bg;
  @Input() appHover;
  @Input() hoverDefaultColour;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.bg = this.hoverDefaultColour ? this.hoverDefaultColour : 'white';

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.bg = this.appHover ? this.appHover : 'brown';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bg = this.hoverDefaultColour ? this.hoverDefaultColour : 'white';
    // this.bg = 'white';
    // this.elementRef.nativeElement.style.background = 'white';
  }

}
