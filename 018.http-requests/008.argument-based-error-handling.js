/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466352#notes

    To handle errors that occur as a result of the Http calls you can add a second argument to the subscribe method.
    The first is the success(next) handler, the second one is the error handler.

    It is a callback function that executes when the API fails.

    ngOnInit() {
        this.isFetching = true;
        this.postsService.fetchPosts()
            .subscribe(response => {
                this.loadedPosts = response;
                this.isFetching = false;
            }, error => {
                this.error = error.message;
            });
    }

 */