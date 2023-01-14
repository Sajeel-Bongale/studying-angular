/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656356#notes

    Adding the guard to the canActivate property adds the guard to both, the parent and the child.
    What if we wanted to allow access to the parent routes but restrict access to child routes?
    We can do so by adding a new interface and therefore implementing a new canActivateChild method
    in the AuthGuard.

    This method has the same signature as canActivate and therefore, we can call the canActivate
    method from inside the canActivateChild method with the same arguments and get the benefit of
    two methods inside one service.

    To use this guard on children we remove the canActivate property in the routes array on server
    route and replace it with canActivateChild property, passing it the same AuthGuard in an array.

    Now only child routes will be guarded, while parent route will remain open for all.

    @Injectable()
    export class AuthGuard implements CanActivate, CanActivateChild {
      constructor(private authService: AuthService, private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                  // canActivateLogic here
      }

      canActivateChild(route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                  this.canActivate(route, state);
      }
    }

    Then in the Routing array where the paths are defined do so:
    {
        path: 'servers',
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],   <- Add this canActivateChild property and pass it the guard
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent }
        ]
    }

 */