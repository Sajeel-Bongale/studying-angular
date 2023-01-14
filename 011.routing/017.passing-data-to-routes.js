/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656358#questions/5246818

    Sometimes you may want some data to be injected into a component when it is loaded. You may be loading
    the same component for different routes and based on those routes you may need some different values.

    You can pass data to a component when a route is loaded by adding the data property in path object in
    the route array and pass it an object. This data is static and will be available in the ActivatedRoute
    object injected in the constructor.

    So:
    In the appRoutes array in AppModule.ts
    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: 'server', component: ServerComponent},
        { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found'}}
    ]

    In the ErrorPageComponent.ts
    errorMessage: string;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.errorMessage = this.route.snapshot.data['message']; // You can also subscribe to the data observable
    }

 */