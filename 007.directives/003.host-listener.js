/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656176#overview

    In the previous sections we have made the background color of the element to be blue always. That does not
    provide any interactivity.

    If we want the attribute to perform interactively, we will want the attribute to listen for events. This can
    be achieved by using a decorator called HostListener().

    HostListener can listen for all native as well as custom events. Using this we can add a background color only
    on hover of element on which the directive sits.

    @Directive({
        selector: '[appBetterHighlight]'
    })
    export class BetterHighlightDirective implements OnInit {

        constructor(private elementRef: ElementRef, private renderer: Renderer2){}

        @HostListener('mouseenter') mouseover {
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        }

        @HostListener('mouseleave') mouseleave {
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        }
    }

    Usage:
    <app-some-component appBetterHighlight /></pp-some-component>


 */
