/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656172#overview

    We created a directive previously using the elementRef. However this is not always the best way to do it.

    There is a better way to gain access to the element and perform some modifications on it. It is called
    renderer. Using it is similar to elementRef. The benefit is that it ensures that the renderer will work
    in all situations like service workers where the elementRef may lead to an error.

    @Directive({
        selector: '[appBetterHighlight]'
    })
    export class BetterHighlightDirective implements OnInit {

        constructor(private elementRef: ElementRef, private renderer: Renderer2){}

        ngOnInit {
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        }
    }

    Usage:
    <app-some-component appBetterHighlight /></pp-some-component>

 */
