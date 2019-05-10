import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.textDeco("yellow");
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("transparent");
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.backgroundColor = action;
  }

}
