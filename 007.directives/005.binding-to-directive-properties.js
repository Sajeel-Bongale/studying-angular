/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656180#overview

    Just like components, we can make our directives dynamic by accepting input params from outside the directive.
    The way to do this is also similar to components. We use the @Input decorator for this purpose.

    To use your inputs simply pass in values after declaring the directive on the desired component, then, bind the
    inputs with some variables just like you would for components. This is one way of doing it.

    The other way is to bind the name of the directive(selector of the directive) as an alias to some input property.
    This is just like how ngClass appears on directives where we bind to the directive.
    To do so, pass the name of the directive as an argument to the @Input constructor call. Then you can bind a value
    directly to the directive name on the element where you are using the directive. Basically what it does is, it
    makes the Input property name same as the directive name, thereby allowing you to bind to it while appearing
    like the directive name. Just like ngClass can be bound to. See Input binding where directive name becomes input name
    example.

    Angular figures out which properties at run time are actually inputs of the directives and which ones belong to
    the components, so you need not worry about them not working.

    One other syntax that you can use, only when the value that is to be passed to an input param is a string is shown
    below. In this example, as you can see, you can omit the square brackets for binding to an input. Note that this
    works only when the bound property is of type string.

    @Directive({
        selector: '[appBetterHighlight]'
    })
    export class BetterHighlightDirective implements OnInit {
        @Input() defaultColor: string = 'transparent';                   <- Basic input binding
        // @Input() highlightColor: string = 'blue';                     <- Default usage example
        @Input('appBetterHighlight') highlightColor: string = 'blue';    <- Input binding where directive name becomes input name
        @HostBinding('style.backgroundColor') backgroundColor: string;

        constructor(private elementRef: ElementRef, private renderer: Renderer2){}

        ngOnInit() {
            this.backgroundColor = this.defaultColor;
        }

        @HostListener('mouseenter') mouseover {
            this.backgroundColor = 'blue';
        }

        @HostListener('mouseleave') mouseleave {
            this.backgroundColor = 'transparent';
        }
    }

    Usage:
    <p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'">Some text here</p>     <- Default usage example
    <p [appBetterHighlight]="'red'" [defaultColor]="'yellow'">Some text here</p>   <- Input binding where directive name becomes input name

    <p appBetterHighlight [defaultColor]='yellow' highlightColor='red'> <-Binding without square brackets


 */
