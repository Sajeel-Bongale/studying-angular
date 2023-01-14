/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466304#notes

    The earlier approach to cross component communication was using EventEmitter to share events across
    the application from inside a service. This approach although correct has a better alternative to it.

    We use a Subject instead of an EventEmitter. A Subject is a special kind of Observable.

    A Subject is different from an Observable in the sense that we can call next on it from the outside
    mySubject.next();
    whereas we cannot call next on a custom observable from the outside. We do it from the inside. This
    makes a Subject more active than an Observable.

    Using a Subject is the recommended way over EventEmitters

    Remember to unsubscribe from Subjects when you don't need them.
    Subjects should be used for cross component communication and not for parent child communication.

    To create a subject:
    We create a similar service file and then instead of an EventEmitter we use a Subject.

    @Injectable()
    export class ServiceA { statusUpdated = new Subject<boolean>(); }

    To use it in a component:
    @Component({...})
    export class ComponentA {
        constructor(private serviceA: ServiceA)
        someHandler() {
            this.serviceA.statusUpdated.next(true);
        }
    }

    @Component({...})
    export class ComponentB implements OnInit {
        constructor(private serviceA: ServiceA)
        ngOnInit() {
            this.serviceA.statusUpdated.subscribe(status => {console.log('Boolean is ', status)});
        }
    }


 */