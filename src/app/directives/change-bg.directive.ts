import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[quizChangeBg]'
})
export class ChangeBgDirective {

  constructor(
    private el:ElementRef,
    private render:Renderer2
  ) { }

  @Input()  isOption:boolean=false;

  @HostListener('click') changeBg(){
    if (this.isOption){
      this.render.setStyle(this.el.nativeElement, 'background','green');
      this.render.setStyle(this.el.nativeElement, 'color','#fff');
      this.render.setStyle(this.el.nativeElement, 'border','1px solid gray');
    }else {
      this.render.setStyle(this.el.nativeElement, 'background','red');
      this.render.setStyle(this.el.nativeElement, 'color','#fff');
      this.render.setStyle(this.el.nativeElement, 'border','1px solid red');
    }
  }

}
