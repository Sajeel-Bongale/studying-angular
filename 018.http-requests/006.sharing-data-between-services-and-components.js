/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466348#notes

    In the last section we outsourced all our Http requests to a service. This resulted in a problem of connection
    between the two. The data in the services was no longer usable by the component. To maintain that connection we
    could use two ways: 1. Subjects - would be perfect when more than one component depended on the data resulting
    from the Http call OR 2. Returning the observable generated from the service and letting the component subscribe
    to the result of the call. We will do 2

    In the service:
    fetchPosts() {
            return this.http.get<{[key: string]: Post[]}>('url')    <- Simply return without subscribing
                        .pipe(//some code here);
    }

    In the component:
    ngOnInit() {
    this.isFetching = true;
        this.postsService.fetchPosts()
            .subscribe(response => {
                this.loadedPosts = response;
                this.isFetching = false;
            });
    }


 */