/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/13193718#overview

    We will create a new directive that makes an element background green.

    To create a directive, we do something similar like creating a component. We create a class, and add a
    @Directive decorator on top of it and pass it a configuration object. This object needs a selector tag
    at least. In the selector tag we pass the selector wrapped in square brackets. This tells Angular that
    the directive is supposed to be an attribute directive and while using it should be placed on the element
    as an attribute.

    Then you create a constructor and this constructor should get an ElementRef type of object which is the
    element on the DOM on which this directive was placed.

    Using this element we can change the look and feel of the element in ngOnInit method.


    @Directive({
        selector: '[appBasicHighlight]'
    })
    export class BasicHighlightDirective implements OnInit {

        constructor(private elementRef: ElementRef){}

        ngOnInit {
            this.elementRef.nativeElement.style.backgroundColor = 'green';
        }
    }

    Usage:
    <app-some-component appBasicHighlight /></pp-some-component>


 */


