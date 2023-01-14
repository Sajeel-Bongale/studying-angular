/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656224#overview

    You can inject one service into another. For this to work you first need to remove declarations of the service
    you want to inject into another service from all the providers in all the Component metadata decorators.
    See previous lesson for reason (hierarchical injection)

    Now add this service to the AppModule so that it is the only global instance available across the app and so
    that it is now available to inject into other services.

    Now to inject ServiceB into ServiceA we need one more additional step. We need to add the @Injectable()
    decorator on top of the ServiceA class(the receiving service). This tells Angular that ServiceA will be
    receiving or injecting into itself another service. The @Injectable decorator need not be applied on top
    of the ServiceB since it will not be pulling in a service for its usage.

    NOTE: In the latest Angular versions you are advised to add the @Injectable decorator regardless of whether
    the service is pulling in other services or not.

    @NgModule({
        ...m,
        providers: [ServiceA, ServiceB]
    })

    @Injectable()
    export class ServiceA implements OnInit{
        constructor(private serviceB: ServiceB) {}

        ngOnInit {
            this.serviceB.doSomething();
        }
    }

    @Injectable     <- Recommended for latest versions of Angular, not needed in older versions
    export class ServiceB implements {
        constructor() {}
        doSomething() { console.log('doing something...);}
    }
 */