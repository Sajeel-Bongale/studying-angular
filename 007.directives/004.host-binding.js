/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656178#overview

    There is yet another way in which we can gain access to the properties of an element in the DOM using directives.
    There is nothing wrong with using the renderer to access the DOM. This is just an additional way of doing it.

    It is with using the @HostBinding directive.

    In it we can bind to any property of the element and then use a host listener method to change or update that
    property.

    @Directive({
        selector: '[appBetterHighlight]'
    })
    export class BetterHighlightDirective implements OnInit {

        @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

        constructor(private elementRef: ElementRef, private renderer: Renderer2){}

        @HostListener('mouseenter') mouseover {
            this.backgroundColor = 'blue';
        }

        @HostListener('mouseleave') mouseleave {
            this.backgroundColor = 'transparent';
        }
    }

    Usage:
    <app-some-component appBetterHighlight /></pp-some-component>

 */
