/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656360#questions/5246818

    In the last section we saw that we can pass some data to the component at the time of routing using the
    data property in the routes array. However, this data is static and does not offer much in terms of
    dynamic content being resolved at load time.

    There is a provision to make data dynamic at route loading time.

    To do so we create a new service, a resolver, which allow us to run some code before a route is rendered.
    @Injectable()
    export class ServerResolver implements Resolve<Server> {
        constructor(private serverService: ServerService) {}

        resolve(route: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.serverService.getServer(+route.params['id']);
        }
    }

    Add this service to the providers array in the app module.

    To add this to a route in the routes array:
    {path: 'server', component: ServerComponent, resolve: { server: ServerResolver }}

    The data now obtained using the resolver will be placed in the server property and this data will now
    be accessible before the component is loaded and can be accessed from within the component using the
    ActivatedRoute object injected in the component.

    In component:
    ngOnInit() {
        this.activatedRoute.data
            .subscribe((data: Data) => {
                this.server = data.server; <- data.server refers to the property name in the resolve object on routes array.
            });
    }


 */