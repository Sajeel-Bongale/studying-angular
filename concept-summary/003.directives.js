/*

    Directive Types
    Attribute directives - ngStyle, ngClass Modify the look or behaviour of only the element they are added to
    Structural directives - *ngIf, *ngFor Modify the DOM or the structure, affects whole area of the DOM


    ngClass and ngStyle usage
    <div [ngClass]="{className: condition}" /> Hello </div>
    <div [ngStyle]="{backgroundColor: functionThatReturnsColorInString()}" /> Hello </div>


    *ngIf with else
    <p *ngIf="serverCreated; else noServer">Server was created</p>
    <ng-template #noServer>
      <p>No server was created</p>
    </ng-template>


    *ngFor with index
    <app-server *ngFor="let server of servers; let i = index"></app-server>


    Directive Creation and Usage
    @Directive({selector: '[appBasicHighlight]'})
    export class BasicHighlightDirective implements OnInit {
        constructor(private elementRef: ElementRef){}
        ngOnInit { this.elementRef.nativeElement.style.backgroundColor = 'green';}
    }
    Use as <app-some-component appBasicHighlight /></pp-some-component>


    Using renderer
    @Directive({selector: '[appBetterHighlight]'})
    export class BetterHighlightDirective implements OnInit {
        constructor(private elementRef: ElementRef, private renderer: Renderer2){}
        ngOnInit { this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');}
    }
    Use as: <app-some-component appBetterHighlight /></pp-some-component>


    Using @HostListener
    @Directive({ selector: '[appBetterHighlight]' })
    export class BetterHighlightDirective implements OnInit {
        constructor(private elementRef: ElementRef, private renderer: Renderer2){}
        @HostListener('mouseenter') mouseover {this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');}
        @HostListener('mouseleave') mouseleave {this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');}
    }


    Using @HostBinding
    @Directive({selector: '[appBetterHighlight]'})
    export class BetterHighlightDirective implements OnInit {
        @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
        constructor(private elementRef: ElementRef, private renderer: Renderer2){}
        @HostListener('mouseenter') mouseover {this.backgroundColor = 'blue';}
        @HostListener('mouseleave') mouseleave {this.backgroundColor = 'transparent';}
    }


    Directive properties and binding to them
    @Directive({selector: '[appBetterHighlight]'})
    export class BetterHighlightDirective {
        @Input() defaultColor: string = 'transparent';                   <- Basic input binding
        // @Input() highlightColor: string = 'blue';                     <- Default usage example
        @Input('appBetterHighlight') highlightColor: string = 'blue';    <- Input binding where directive name becomes input name
    }
    Usage:
    <p appBetterHighlight [defaultColor]="'yellow'" [highlightColor]="'red'">Some text here</p>     <- Default usage example
    <p [appBetterHighlight]="'red'" [defaultColor]="'yellow'">Some text here</p>   <- Input binding where directive name becomes input name
    <p appBetterHighlight [defaultColor]='yellow' highlightColor='red'> <-Binding without square brackets


    * transformation in structural directives
    Behind the scenes angular transforms the * syntax into an ng-template with your child elements and to this template
    it adds the ngIf  directive and binds it to the condition that you have provided to it in the original syntax.


    *ngSwitch
    <div [ngSwitch]=value>
        <p *ngSwitchCase="5">The value is 5</p>
        <p *ngSwitchCase="10">The value is 10</p>
        <p *ngSwitchCase="100">The value is 100</p>
        <p *ngSwitchDefault>Value is default</p>
    </div>


 */
