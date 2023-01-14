/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656296#notes

    We can pass parameters to routes such that we can load components based on dynamic values.
    For example we may have a common user data component that shows data about a user and that user
    is fetched based on a id that is passed in the route param.

    To implement this we add a route param with a colon in the path property of the Routes array declared for routing.

    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: 'user', component: UsersComponent},
        { path: 'user/:id', component: UserComponent},      <- path param declared with :
        { path: 'server', component: ServerComponent}
    ]

    If you open localhost:4200/user/2, it will now open the user component.

    To access the route param from within a component, we can use the ActivatedRoute object.
    This object has all the information about the currently active route.

    To get them do:
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
        console.log(this.route.snapshot.params['id']);
    }




 */
