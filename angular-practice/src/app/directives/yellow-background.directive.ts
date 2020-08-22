import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private elementRef: ElementRef) { 
    elementRef.nativeElement.style.background= 'yellow';
  }

}
