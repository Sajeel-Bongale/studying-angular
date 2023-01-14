/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656308#notes

    You may want to add query params or fragments while opening routes.

    To add query params from the template you can simply bind to the queryParams property which is
    actually a property of the routerLink directive.

    To the query params property you pass an object with keys as query param keys and values as values.

    Similarly you can bind to the fragment property or simply pass it a string value. This value
    will be attached at the end of the URL and will cause the page to navigate to the element with
    the id mentioned in the fragment.

    Like so:
    <a [routerLink]="['/servers', 5, 'edit']" [queryParams]="{allowEdit: '1'}" fragment="loading"> Edit </a>

    To add the params programmatically, we do
    this.router.navigate(
        ['/servers', 5, 'edit'],
        {
            queryParams: {allowEdit: '1'},
            fragment: 'loading'
        }
    );


    To retrieve the params in a component, same rules apply as they did for route params.
    You can either fetch them from the snapshot or if you want to react to changes in the params, both
    queryParams and fragments have observables that you can subscribe to for listening to those changes.
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
        console.log(this.route.snapshot.queryParams);
        console.log(this.route.snapshot.fragment);

        this.route.queryParams
            .subscribe((queryParams) => {
                console.log('Update queryParams are: ', queryParams);
            });
        this.route.fragment
            .subscribe((fragment) => {
                console.log('Update fragment is: ', fragment);
            });
    }


 */
