import {Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlights]'
})
export class BetterHighlightsDirective implements OnInit{

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}
