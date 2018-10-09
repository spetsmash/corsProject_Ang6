import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlights]'
})
export class BetterHighlightsDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  // @Input() highlightColor = 'blue';
  @Input('appBetterHighlights') highlightColor = 'blue';
  // @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;  // in ('') to which property we want to bind
  @HostBinding('style.backgroundColor') backgroundColor;  // in ('') to which property we want to bind

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
