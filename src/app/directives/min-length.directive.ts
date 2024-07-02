import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMinLength]'
})
export class MinLengthDirective {
  @Input('appMinLength') minLength: any;
  constructor(private el: ElementRef) {}
  @HostListener('input') onInput() {
    const inputValue: string = this.el.nativeElement.value;
    if (inputValue.length > this.minLength) {  
      alert(`Minimum length is ${this.minLength} characters.`)   
    }
  }

}
