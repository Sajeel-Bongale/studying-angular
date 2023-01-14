/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466328#notes

    Angular provides a feature/module that allows you to create and send HTTP requests with the help of a service.
    This module is called HttpClientModule and it is imported from @angular/common/http.
    So in the AppModule, you import it as
    @NgModule({
    ...
    imports: [
        ...,
        HttpClientModule
    ]
    })

    You can then use the HttpClient service provided by this module and inject it in any service/component where
    you want to make Http requests from.
    So in the FormComponent
    constructor(private http: HttpClient) {}

    onSubmit(postData: PostData) {
        this.http.post(
            'https://backend-for-angular-d841a-default-rtdb.firebaseio.com/posts.json',
            postData
        ).subscribe(responseData => {
            console.log(responseData);
          })
    }

    Angular wraps all HTTP requests in Observables. As observables are, they will not execute until and unless
    someone listens to them or subscribes to them. Therefore, you will not see a request generated in the network
    tab if you have not subscribed to an http post or get or any other http call.

    Angular will perform the job of creating a JSON out of the body that you will pass to the post request. It also
    performs the job of extracting the data portion of a response from the entire response object and providing that
    to the next handler of the subscribe to your http request. You can also get access to the entire response object
    and that will be taught in a different lecture.

 */