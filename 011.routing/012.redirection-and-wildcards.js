/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656332#notes

    We may have a limited number of routes in our application. For all other routes we may want to display
    some message like page not found or a generic 404 page. This is almost always the use case for all
    applications.

    Angular provides easy way to achieve this in the form of route redirections and by the use of wildcards.
    We simply add a new component called PageNotFoundComponent to the app and then provide it against
    a route like /not-found.

    Then we use Angular's feature that provides a wildcard for a path (**) which means match any path and
    then use the redirectTo property to navigate the user to the desired path.

    NOTE: The wildcard path should always be at the end of the routes array as Angular matches the incoming
    route in the order in which they are declared in the appRoutes variable. If the wildcard is the first
    value all the routes will be always redirected to the not-found page as no other check will ever be made.

    To use them:
    app.module.ts
    const appRoutes: Routes = [
        { path: '', component: HomeComponent},
        { path: 'users', component: UsersComponent,
        { path: 'not-found', component: PageNotFoundComponent },
        { path: '**', redirectTo: 'not-found' }
    ]

 */
