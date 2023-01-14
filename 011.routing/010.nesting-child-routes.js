/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656322#notes

    Sometimes we may have several top level routes and several routes inside of it. For example, we may have a
    users page(/users) and an edit user page with a nested route(/users/edit).

    We can create such nested routes inside the routes array that we pass at the time of the initialization.

    We only need to implement two major changes for this.
    1. We add the children property to the route we want to use as a top level route and to this property we
    pass an array of routes with the same signature like a parent route(path and component properties).
    2. Inside the parent component HTML template we declare another <router-outlet> so that the child routes
    can load their components inside the new outlet.

    So, the main routes will continue loading in the parent router-outlet while the child routes will be placed
    in the second router outlet.

    For example:
    AppModule.ts
    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: 'user', component: UserComponent},          <- Notice no slashes('/') at the beginning
        {
            path: 'servers',
            component: ServersComponent,
            children: [
                { path: 'edit', component: EditServerComponent} <- This will load a route at localhost:4200/server/edit
            ]
        }
    ];

    In the server.component.html
    <div>
        <router-outlet></router-outlet>
    </div>


 */
