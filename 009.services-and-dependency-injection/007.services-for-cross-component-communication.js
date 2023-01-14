/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656226#overview

    You can use services as a medium for components to communicate amongst themselves.
    To do so you can add an event emitter variable in the service class and use this variable
    to emit events from one component when something changes and then subscribe to that change in
    another component.

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

 */