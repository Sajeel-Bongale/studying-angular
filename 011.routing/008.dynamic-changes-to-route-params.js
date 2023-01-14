/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656302#notes

    Route parameters can be retrieved as defined previously using the ActivatedRoute. There is however, one
    edge case where route params need to be retrieved dynamically and updated as a result.

    This happens when the component data depends on the route params and the route params can be updated from
    within the component itself.

    To react to such changes only looking at the snapshot params is not sufficient. When the page updates with
    new params they will not be reflected in the component data. We need to subscribe to the params for updates
    if we want to listen to such changes.

    In the component we do
    private routeSubscription
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
        console.log(this.route.snapshot.params['id']); // provides the data when the component is first loaded
        this.routeSubscription = this.route.params
            .subscribe((params: Params) => {
                console.log('Update params are: ', params['id]);
            });
    }

    This will correctly updated the component data now.

    NOTE: This subscription is automatically destroyed by Angular when the component is destroyed. So you don't
    have to do it manually. You need to however, destroy subscriptions that Angular does not otherwise manage.
    These could be subscriptions you added for services or for other manually added ones.

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }

 */

