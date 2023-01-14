/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466356#notes

    One other way to handle errors is to use a Subject in the service that will make the HTTP calls. After the HTTP
    call is made, subscribe to it in the service and pass a second argument to the subscription(the error handler).
    In this handler, you call next on the error subject. Then subscribe to the errorSubject in any component that uses
    the service to show any error message obtained from it as you want.

    In the service:
    errorSubject = new Subject<string>();

    createAndStorePosts(title: string, content: string) {
        const postData: Post = {title, content};
        this.http
            .post<{ name: string }>(
                'https://backend-for-angular-d841a-default-rtdb.firebaseio.com/posts.json',
                postData
            )
            .subscribe(responseData => {
                console.log(responseData);
            }, error => {
                this.errorSubject.next(error.message);
            });
    }

    In the component:
    errorSubscription: Subscription;
    this.errorSubscription = this.postsService.errorSubject.subscribe(errorMessage => {
        this.error = errorMessage;
    });


 */