/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656294#notes

    We can navigate to a new route programmatically using the router.navigate method as we saw in the earlier section.

    However we saw that only in the context of absolute navigation. What if we want to route it in a relative manner
    like we did using the routerLink attribute on the anchor elements.

    If we simply add a navigation path value to the array passed to the navigate method without a leading slash
    then it does neither adds a relative path to the current route nor does it error out. This is because the
    router sitting in the component which it is called from doesn't know about the currently activated route.

    The routerLink attribute however, is aware of the place where it currently sits.

    To tell the navigate method where we are in the path hierarchy, we need to pass an additional argument to
    the router.navigate method. This object is of type NavigationExtras. It has several properties, however, the
    one we are interested in, is called relativeTo.

    This property allows us to tell the navigate method, to which path, we want the value specified in the argument
    array, to be relative to.

    The usually opted mechanism is that we want the route to be relative to the currently activated route in the
    address bar.

    To do so we need to inject a new service dependency called ActivatedRoute which provides, as the name suggests,
    the currently activated route.

    We pass this as a value to the relativeTo property we declared above. Now, Angular knows that we want to add the
    route as a relative path and once added, now the application breaks as expected because it adds a route on top
    of the currently activated route.

    In the component where we want to relatively route:

    constructor(private router: Router,
                private route: ActivatedRoute)

    onSomeClick() {
        // current route is localhost:4200/server
        this.router.navigate(['server'], {relativeTo: this.route});
        // This will make the route to be localhost:4200/server/server
    }

 */
