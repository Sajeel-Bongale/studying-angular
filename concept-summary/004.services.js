/*

    What are services?
    1. They provide a way to centralize code so as to avoid duplication
    2. They provide a single place where you can store data to be used from across the application
    3. They provide a means of communication between components using EventEmitter API


    Creating a service
    export class MyService { doSomething() {} }


    Injecting a service
    @Component({ ..., providers: [MyService]  })
    export class ServiceUser {
        constructor(private myService: MyService) {}
        handleClick() {this.myService.doSomething()}
    }


    Hierarchical Injectors
    There are different ways of injecting services into an Angular application.
    Adding a service to:
    1. providers array of AppModule      -  Same instance of Service is available Application-Wide
    2. providers array of AppComponent   -  Same instance of Service is available for all Components (but not for
                                            other services)
    3. providers array of last Component -  Same instance of Service is available for the Component and all its
       in HTML hierarchy                    child components
    NOTE: Adding a new provider in a child overrides the Service instance provided in the parent


    Injecting services into services
    @NgModule({ ..., providers: [ServiceA, ServiceB] }) <- AppModule.ts
    @Injectable()
    export class ServiceA { constructor(private serviceB: ServiceB) {} }


    Cross Component Communication using services
    @Injectable()
    export class ServiceA {
        statusUpdated = new EventEmitter<string>();
        constructor() {}
    }
    @Component({...})
    export class ComponentA {
        constructor(private serviceA: ServiceA)
        someHandler() {
            this.serviceA.statusUpdated.emit('online');
        }
    }
    @Component({...})
    export class ComponentB implements OnInit {
        constructor(private serviceA: ServiceA)
        ngOnInit() {
            this.serviceA.statusUpdated.subscribe(status => {console.log('New status is ', status)});
        }
    }


    Injecting a service using the injectable decorator
    A new way of injecting a service in Angular is that you can add an object to the decorator with the providedIn property.
    @Injectable({
        providedIn: 'root' <- Adds service to the AppModule providers, it is an alternative to providers array in app.module.ts
    })
    export class MyService {}

*/