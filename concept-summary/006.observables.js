/*

    What is an observable
    An observable can be thought of as a source of data. The entire observable architecture consists of
    an observable, an observer and the events that happen during a timeline when the two are alive. In the observer,
    in Angular, you write a subscriber function. Inside this function it can handle 3 types of data packages:
    success, failure and completion.


    Creating observable
    In the component.ts file
    import { interval, Subscription } from 'rxjs';
    intervalSubscription: Subscription;
    ngOnInit() {
        this.intervalSubscription = interval(1000).subscribe((count) => {console.log(count);});
    }
    ngOnDestroy() { this.intervalSubscription.unsubscribe(); }


    Custom Observable
    ngOnInit() {
        const customObservable = Observable.create((observer) => {
            let count = 0;
            // Observer gets methods like next, error and complete on it
            setInterval(() => { observer.next(count++) }, 1000);
        });
        // Consuming observables
        customObservable.subscribe((count) => {console.log(count});
    }


    Observable Errors and Completion
    const customObservable = Observable.create((observer) => {
        let count = 0;
        setInterval(() => {
            observer.next(count);       <- Observer gets methods like next, error and complete on it
            if(count === 2) { observer.complete() }
            if(count > 3) { observer.error('Count is greater than 3) }
            count++;
        }, 1000);
    });
    this.intervalSubscription = customObservable.subscribe(
        (count) => { console.log(count)},                           <- Next Handler
        (error) => { console.log('error occurred ', error) },       <- Error Handler
        () => { console.log('Observable completed') }               <- Completion Handler
    );
    NOTE: Errors do not result in calling of complete callback, however they end the observable stream.


    Operators in rxjs
    Operators in rxjs allow you to manipulate your data before sending it to the subscribe handler.
    You use the pipe method, inside which you define a comma separated list of operators like map, filter.
    Then you chain the output of pipe to the subscribe method.
    this.intervalSubscription = customObservable
        .pipe(
            filter((data: number) => { return data > 0 })),
            map((data: number) => { return 'Round ' + (data + 1) }))
        )
        .subscribe(result => {console.log(result)});


    Subjects
    We use a Subject instead of an EventEmitter. A Subject is a special kind of Observable in the sense that we can call
    next on it from the outside like mySubject.next(); which as opposed to, in an Observable is called from inside.
    In service
    export class ServiceA { statusUpdated = new Subject<boolean>(); }
    In emitting component
    @Component({...})
    export class ComponentA {
        constructor(private serviceA: ServiceA)
        someHandler() { this.serviceA.statusUpdated.next(true); }
    }
    In consuming component
    @Component({...})
    export class ComponentB implements OnInit {
        constructor(private serviceA: ServiceA)
        ngOnInit() { this.serviceA.statusUpdated.subscribe(status => {console.log('Boolean is ', status)}); }
    }
    Remember to unsubscribe from Subjects when you don't need them.
    Subjects should be used for cross component communication and not for parent child communication.


 */