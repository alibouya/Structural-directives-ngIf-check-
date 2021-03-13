import { Directive,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input() defaultColor = 'green';
  @HostBinding('style.backgroundColor') bg='red';
  constructor() { }
  @HostListener('mouseenter') enter(){
    alert(this.defaultColor);
    this.bg= 'yellow';
  } 
  @HostListener('mouseleave') leave(){
    this.bg= 'red';
  } 

}
