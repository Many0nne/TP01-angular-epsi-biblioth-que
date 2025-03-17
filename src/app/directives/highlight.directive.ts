import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective   {
  @Input() appHighlight: boolean = false;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHighlight']) {
      if (this.appHighlight) {
        this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
      } else {
        this.renderer.removeStyle(this.el.nativeElement, 'fontWeight');
      }
    }
  }
  // TODO 24 ✅: Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
}
