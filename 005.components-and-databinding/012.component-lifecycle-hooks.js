/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656102#overview

    When a custom component needs to be rendered on the DOM, this component goes through a bunch of phases.
    Angular allows us to provide methods to listen or basically respond to those life cycle events and
    provide our custom code to execute when these events happen.

    There are specific methods which Angular provides us which we can write our code in and these methods will
    be run in response to those events being triggered in the lifecycle of the component.

    The lifecycle events and their handlers are:

    NOT A LIFECYCLE EVENT - constructor()

    ngOnChanges - Called multiple times. Called at the very beginning. Called every time after a bound @Input
                  property changes. Only hook to receive an argument which is of type SimpleChanges. Shows which
                  Input properties have changed

    ngOnInit - Called once the component has been initialized. This does not mean the element is on the DOM. Only
               the object of the element is ready at this point of time. So properties are available for getting
               and setting.

    ngDoCheck - Called every time some event happens. Called multiple times, several in fact. It runs in response
                to change detection being run. Basically after any event like button click, resolved observable or
                basically any change that angular should know about so that it can trigger a rerender.
                NOTE: ngDoCheck runs on every check by angular, not just if something changes. ngDoCheck will run
                even if you click something and that event does not change anything. This is because it has to
                check if something changed.

    ngAfterContentInit - Called after content(ng-content), ie the view that the parent wants to project into the
                         child has been initialized.

    ngAfterContentChecked - Called every time the projected content has been checked. Runs every time after change
                            detection runs.

    ngAfterViewInit - Called after the component's view (and child views) has been initialized. Basically once
                      the view has been completely rendered.

    ngAfterViewChecked - Called every time the component's view (and child views) has been checked. Runs every time
                         after change detection runs.

    ngOnDestroy - Called once the component is about to be destroyed. It is a good place to do some cleanup code
                  before the component/object is destroyed.

 */
