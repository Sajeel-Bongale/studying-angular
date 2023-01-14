/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656280#overview

    Angular provides a router in a separate package that allows you to utilize the Single Page Application(SPA)
    functionality that it is so popular for.

    To make an app use routing we need to perform a series of steps.

    Where should we provide information about the routing that we want to do?
    The AppModule is an appropriate place for such declarations. So in th AppModule we will declare
    the routes that we want in the application. By routes we mean a new page or component corresponding
    to a new url in the address bar.

    1. So in the AppModule we add an appRoutes constant of type Routes imported from @angular/router.
    2. Then we declare the routes in this variable. It is an array of objects. The object must contain
        a path property with a value that is the path that is added to the url. This value should not
        contain a slash at the beginning. Additionally, it needs the component that we want to display
        when this route is hit or reached.
    3. Then we tell Angular about these routes by adding a new module in the imports array of the
        NgModule declarations. It is the RouterModule. We call the RouterModule.forRoot method on it
        and then pass it the routes we declared in the above step.
    4. Finally in the first HTML component(app.component.html) we define where we want to show these
        components when the path is reached. For this we add the <router-outlet> directive to app.component.

    AppModule.ts
    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: 'user', component: UserComponent},          <- Notice no slashes('/') at the beginning
        { path: 'server', component: ServerComponent}
    ]

    @NgModule({
        declarations: [...],
        imports: [
            ...,
            RouterModule.forRoot(appRoutes)
        ]
    })

    app.component.html
    <div>
        <router-outlet></router-outlet>
    </div>

 */