import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightLike]'
})

export class HighlightLikeDirective {
  constructor(private elem:ElementRef){}
  
  @HostListener('click') onClick() {
    this.highlight('green');

  }
  
  
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }



}
