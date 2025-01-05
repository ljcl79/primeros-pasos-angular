import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
    standalone: true
})
export class HighlightDirective {
    @Input('appHighlight') highlightColor = 'rgba(59, 130, 246, 0.1)';
    private originalBackground: string;

    constructor(private el: ElementRef) {
        this.originalBackground = el.nativeElement.style.backgroundColor;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.el.nativeElement.style.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.el.nativeElement.style.backgroundColor = this.originalBackground;
    }

}