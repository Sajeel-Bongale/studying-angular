/*

    Custom property and event binding
    Used for parent child communication in custom components
    @Input('nameWhenBindingFromParent') nameInsideComponent: string;
    @Output() customEvent = new EventEmitter<MyCustomTypeOfEvent>();
    NOTE: Custom events do not propagate beyond one level.


    $event property
    Angular provides a special $event keyword which can be used as an argument(at any place in the args list)
    when listening to a event. It holds the event details fired.
    <input type="text" (click)="onClick($event)" />
    <app-header (featureSelected)="onFeatureSelected(firstArgument, '$event)"></app-header>


    View Encapsulation
    Changes the way CSS rules are applied to elements
    Add either one of this inside component decorator
    encapsulation: ViewEncapsulation.Emulated               <- Default angular encapsulation using custom attributes
    encapsulation: ViewEncapsulation.None                   <- No encapsulation, it is like regular HTML
    encapsulation: ViewEncapsulation.ShadowDom              <- Introduces native shadow Dom approach


    Local References in templates
    Refers to the element only and only in the HTML file
    <input #myInput type="text">
    <p [innerText]="myInput.value"></p>


    View Child
    Allows selection of child elements from template into the typescript file using local reference variables
    HTML template
    <input type="text" #myInput>
    <app-server-component></app-server-component>
    Typescript file
    @ViewChild('myInput') textInput;
    @ViewChild(ServerComponent) server: ElementRef;


    ng-content for content projection in child custom components
    To project content from a parent element into a child component between its tags such that the child component
    will render this html content. We use the ng-content directive for this.
    In parent html
    <app-server>My server is created</app-server>
    In child html
    <div>
        <ng-content></ng-content>  <- My server is created will be printed in place of this tag
    </div>


    Content Child
    Allows selection of projected content from template of parent into the typescript file of child using local
    reference variables
    Parent component
    <app-server-component>
        <p #projectionReference>My projected content</p>
    </app-server-component>
    Child Typescript file (app-server.component.ts)
    @ContentChild('projectionReference') projectedParagraphElement;


    Lifecycle events - Refer to 005.components-and-databinding/012.component-lifecycle-hooks.js for
    detailed descriptions
    NOT A LIFECYCLE EVENT - constructor()
    ngOnChanges
    ngOnInit
    ngDoCheck
    ngAfterContentInit
    ngAfterContentChecked
    ngAfterViewInit
    ngAfterViewChecked
    ngOnDestroy

 */
