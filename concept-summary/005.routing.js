/*

    Setting up and loading routes
    app.module.ts
    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: 'user', component: UserComponent},          <- Notice no slashes('/') at the beginning
        { path: 'server', component: ServerComponent}
    ]
    @NgModule({ ..., imports: [ ..., RouterModule.forRoot(appRoutes) ]
    })
    app.component.html
    <div><router-outlet></router-outlet></div>


    Using routerLink - Navigating from within HTML Templates
    You can use the routerLink directive in two ways.
    1. Directly provide the path with a slash
    2. Property binding with the routerLink. Once you do this you need to provide as a value
        i. a variable name OR
        ii. a string inside the double quotes OR
        iii. an array that defines the absolute path to the route you want to visit
    <li><a routerLink="/"> Home </a></li>                           <- 1
    <li><a routerLink="/users"> Users </a></li>                     <- 1
    <li><a [routerLink]="serverPath"> Servers </a></li>             <- 2.i
    <li><a [routerLink]="'/servers'"> Servers </a></li>             <- 2.ii
    <li><a [routerLink]="['/servers', device]"> Servers </a></li>   <- 2.iii


    routerLink directive with no property binding
    current path is localhost:4200/home
    <li><a routerLink="/users"> Home </a></li>         <- Absolute path; will resolve to localhost:4200/users
    <li><a routerLink="users"> Home </a></li>          <- Relative path; will resolve to localhost:4200/home/users
    <li><a routerLink="./users"> Home </a></li>        <- Relative path; will resolve to localhost:4200/home/users
    <li><a routerLink="../users"> Home </a></li>       <- Relative path; will resolve to localhost:4200/users


    Styling active links
    We need to add
    1. routerLinkActive with the class name as value when the tab is active
    2. Property bind to routerLinkActiveOptions an object, for empty or / routes with an object that matches exact
        paths. Otherwise it considers the blank path active all the time
    <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/">Home</a></li>
    <li routerLinkActive="active"><a routerLink="/users">Users</a></li>


    Navigating Programmatically
    constructor(private router: Router) {}
    someHandler() { this.router.navigate(['/servers']); }


    Relative routes in Programmatic Navigation
    constructor(private router: Router, private route: ActivatedRoute)
    onSomeClick() {
        // current route is localhost:4200/server
        this.router.navigate(['server'], {relativeTo: this.route}); // add the relativeTo property to options object
        // This will make the route to be localhost:4200/server/server
    }


    Adding and retrieving route params
    To add route params add a colon and then the name of the param you want to pass in the route
    const appRoutes: Routes = [{ path: 'user/:id', component: UserComponent}]
    To use it
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {console.log(this.route.snapshot.params['id']);}


    Dynamically reacting to route param changes
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
        console.log(this.route.snapshot.params['id']); // provides the data when the component is first loaded
        // Addition of subscription to listen to route changes
        this.route.params
            .subscribe((params: Params) => {
                console.log('Update params are: ', params['id]);
            });
    }


    Adding Query Params and Fragments in addition to routerLink
    <a [routerLink]="['/servers', 5, 'edit']" [queryParams]="{allowEdit: '1'}" fragment="loading"> Edit </a>
    // Leads to route localhost:4200/servers/5/edit?allowEdit=1#loading

    Adding Query Params and Fragments programmatically
    this.router.navigate(['/servers', 5, 'edit'], { queryParams: {allowEdit: '1'}, fragment: 'loading' });


    Retrieving Query and Fragment Params in Components
    // Static
    this.route.snapshot.queryParams;
    this.route.snapshot.fragment;
    // Dynamic or Reactive
    this.route.queryParams.subscribe((queryParams) => {console.log('Update queryParams are: ', queryParams)});
    this.route.fragment.subscribe((fragment) => {console.log('Update fragment is: ', fragment)});


    Nesting child routes
    app.module.ts
    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        {
            path: 'servers',
            component: ServersComponent,
            children: [
                { path: 'edit', component: EditServerComponent} <- This will load a route at localhost:4200/server/edit
            ]
        }
    ]
    server.component.html
    <div><router-outlet></router-outlet></div> <- Nested child routes will display here


    Preserving query params
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});


    Route redirection and Wildcards
    app.module.ts
    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: 'users', component: UsersComponent,
        { path: 'not-found', component: PageNotFoundComponent },
        { path: '**', redirectTo: 'not-found' }                 <- Wildcard that matches all paths
    ]


    Using guards to restrict access to routes - IMPORTANT
    Refer to the code in the file 011.routing/014.guards-using-can-activate.js


    Using guards to restrict child  routes - IMPORTANT
    Refer to the code in the file 011.routing/015.guarding-children-with-can-activate-child.js


    Using CanDeactivateGuard
    Refer to the link to understand and implement CanDeactivate as it is not easy to define it here
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656346#questions/5246818


    Passing Data to routes
    In the appRoutes array in AppModule.ts
    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found'}}
    ]
    In the ErrorPageComponent.ts
    errorMessage: string;
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {this.errorMessage = this.route.snapshot.data['message']; // You can also subscribe to the data observable}


    Passing dynamic data to routes
    Create Resolver class
    @Injectable()
    // Implementing Resolve forces us to add the resolve method
    export class ServerResolver implements Resolve<Server> {
        constructor(private serverService: ServerService) {}
        resolve(route: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.serverService.getServer(+route.params['id']);
        }
    }
    To add this to a route in the routes array:
    {path: 'server', component: ServerComponent, resolve: { server: ServerResolver }}
    In the component:
    ngOnInit() {
        this.activatedRoute.data.subscribe((data: Data) => {
            this.server = data.server; <- data.server refers to the property name in the resolve object on routes array.
        });
    }


    Using hash based routing
    In the routing or main app module, or wherever your routes are
    Router.forRoot(appRoutes, {useHash: true});
    Always set the server side configuration to serve the index.html in case of 404 routes. This will send
    the index.html to the user and will allow the angular app to boot up and then show the 404 page configured
    on the client app.

 */
