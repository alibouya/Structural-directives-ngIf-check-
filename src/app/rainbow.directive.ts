import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.color') color;
  @HostBinding('style.borderColor') bc;
  @HostListener('keyup') changeColor(){
   this.bc = this.generateRandomColor();
   this.color = this.generateRandomColor();

  }
  generateRandomColor():string {
    return '#'+ Math.floor(Math.random()*16777215).toString(16);

  }
  constructor() { }

}
