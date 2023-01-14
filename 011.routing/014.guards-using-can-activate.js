/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656342#notes

    There is another important feature in Angular that allows you to block access to certain routes based
    on any custom condition. This could be role based access or plain authentication based access.

    Angular allows you to protect these routes by using something called a canActivate property on the route.
    This property takes as a value, an array of Guard services that implement the CanActivate interface.
    This interface forces the guard service to implement the canActivate method. This method returns either
    a boolean or an Observable or Promise wrapping a boolean.

    When the method returns a true value, the route is allowed to be accessed. If it is false, you can choose
    to navigate to a different route from within the guard or simply return a false value that prevents the
    navigation from proceeding leaving you on the old route.

    This guard will now act for all the routes at the parent (server) level as well as for each child route
    by default.

    The code for such a guard looks like this

    @Injectable()
    export class AuthGuard implements CanActivate {
      constructor(private authService: AuthService, private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
          .then(
            (authenticated: boolean) => {
              if (authenticated) {
                return true;
              } else {
                this.router.navigate(['/']); // move away to a different route
              }
            }
          );
      }
    }

    You will need to create a new authentication service that mocks the authentication mechanism like so:
    export class AuthService {
        loggedIn = false;

        // mocks the authentication process by waiting for 800ms
        isAuthenticated() {
            const promise = new Promise(
              (resolve, reject) => {
                setTimeout(() => {
                  resolve(this.loggedIn);
                }, 800);
              }
            );
            return promise;
        }

        login() {
            this.loggedIn = true;
        }

        logout() {
            this.loggedIn = false;
        }
    }

    Add these services to the providers array of the AppModule.ts file.

    Then in the Routing array where the paths are defined do so:
    {
        path: 'servers',
        canActivate: [AuthGuard],   <- Add this canActivate property and pass it the guard
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent }
        ]
    }

 */
