/*

    Sending POST requests
    Angular provides a feature/module that allows you to create and send HTTP requests with the help of a service.
    This module is called HttpClientModule. You can then use the HttpClient service provided by this module and inject
    it in any service/component where you want to make Http requests from. Angular wraps all HTTP requests in
    Observables. As observables are, they will not execute until and unless someone listens to them or subscribes to
    them. Therefore, you will not see a request generated in the network tab if you have not subscribed to an http post
    or get or any other http call. Angular will perform the job of creating a JSON out of the body that you
    will pass to the post request. It also performs the job of extracting the data portion of a response from the
    entire response object and providing that to the next handler of the subscribe to your http request.
    In the AppModule
    @NgModule({..., imports: [ ..., HttpClientModule ] })
    In the FormComponent.ts
    constructor(private http: HttpClient) {}
    onSubmit(postData: PostData) {
        this.http.post( 'https://backend-for-angular-d841a-default-rtdb.firebaseio.com/posts.json', postData)
            .subscribe( responseData => { console.log(responseData) })
    }


    GET requests
    Similar to the POST request we can make use of the HttpClient to make GET requests. Similar rules of subscription
    apply here too as mentioned in the POST requests.
    this.http.get('https://backend-for-angular-d841a-default-rtdb.firebaseio.com/posts.json')
      .subscribe(response => { console.log(response); });


    Using RxJS operators to filter data
    You can use RxJS operators to transform data that you receive from the HTTP requests before you send it to the final
    subscribe method. To do so you need to run a pipe method on the get call. This pipe will consume the get response
    and transform it based on the operators (map, filter) that you pass to it as arguments and eventually spit
    out a new Observable that you will consume as a subscription
    this.http.get('https://backend-for-angular-d841a-default-rtdb.firebaseio.com/posts.json')
        .pipe(
            map(responseData => { // custom map logic that returns an array})
        )
        .subscribe(response => { console.log(response) });


    Adding Types to Http methods
    To add types to the values generated by the http client requests you can add the type against the value received
    in a pipe operator or within the subscribe operator. However, a better approach is by adding angular brackets
    after the get/post method call and within it declare the type of the object you will be receiving as the response.
    This type declaration gets propagated to the pipe and subscribe callbacks and you do not need to declare the types
    there. You don't need to add Promise wrappers to it.
    // Here Post is a predefined model.
    this.http.get<Post[]>('urlHere')
      .pipe(// code here)
      .subscriber(// code here)


    Using a Service for Http Requests
    We should move our Http requests for model items such as blog posts in its own service. This leaves the component
    code lean and left to deal with component related work. Because quite often when we build larger applications a
    large part of the code starts finding its way into the component code. While some of it may be rightfully in its
    place, some can be moved to action specific services.
    We can create a Posts service:
    @Injectable({ providedIn: 'root' })
    export class PostsService {
        constructor(private http: HttpClient) {}
        createAndStorePosts(title: string, content: string) {
            const postData: Post = {title: title, content: content};
            this.http.post<{ name: string }>('url', postData)
                .subscribe(responseData => { console.log(responseData); })
        }
        fetchPosts() {
            this.http.get<{[key: string]: Post[]}>('url')
              .subscribe(response => { console.log(response)});
        }
    }
    In the app component:
    constructor(private postsService: PostsService) {}
    ngOnInit() {
        this.postsService.fetchPosts();
    }
    onCreatePost(postData: { title: string; content: string }) {
        // Send Http request
        this.postsService.createAndStorePosts(postData.title, postData.content);
    }



    Sharing data between services and components after outsourcing the Http call
    The data in the services is no longer usable by the component. To maintain that connection we
    could use two ways: 1. Subjects - would be perfect when more than one component depended on the data resulting
    from the Http call OR 2. Returning the observable generated from the service and letting the component subscribe
    to the result of the call. We will do 2
    In the service:
    fetchPosts() {
        return this.http.get<{[key: string]: Post[]}>('url').pipe(//some code here); <- Simply return without subscribing
    }
    In the component:
    ngOnInit() {
        this.isFetching = true;
        this.postsService.fetchPosts()
            .subscribe(response => {         <- Subscribe here so that the call is made and data becomes available here
                this.loadedPosts = response;
                this.isFetching = false;
            });
    }


    Deleting posts
    We can delete items by making use of the delete api method provided by HttpClient.
    deletePosts() {
        return this.http.delete('url');
    }


    Handling Errors - Error Handler (2nd Argument)
    To handle errors that occur as a result of the Http calls you can add a second argument to the subscribe method.
    The first is the success(next) handler, the second one is the error handler.
    It is a callback function that executes when the API fails.
    ngOnInit() {
        this.postsService.fetchPosts()
            .subscribe(
                response => {// next handler code here},
                error => { this.error = error.message; }
            );
    }


    Handling Errors - Subjects
    One other way to handle errors is to use a Subject in the service that will make the HTTP calls. After the HTTP
    call is made, subscribe to it in the service and pass a second argument to the subscription(the error handler).
    In this handler, you call next on the error subject. Then subscribe to the errorSubject in any component that uses
    the service to show any error message obtained from it as you want.
    In the service:
    errorSubject = new Subject<string>();           <- Create a new subject for propagating errors
    createAndStorePosts(title: string, content: string) {
        const postData: Post = {title, content};
        this.http
            .post<{ name: string }>('url', postData)
            .subscribe(
                responseData => { console.log(responseData); },
                error => { this.errorSubject.next(error.message); } <- When error occurs push it on to the error subject
            );
    }
    In the component:
    errorSubscription: Subscription; <- Declare new subscription that will listen on the subject for errors
    this.errorSubscription = this.postsService.errorSubject.subscribe(errorMessage => { this.error = errorMessage; });


    Using the catchError RxJS operator
    Sometimes you may be using operators to modify your response that comes back from an HTTP call before subscribing
    to it. In the event that an error occurs, you may want to catch it before the subscription/error handler is called.
    For example, you may want to send some analytics to your analytics server. And then you want to display the error
    message on the UI. To do this, you can use the catchError operator after the map or any other operator that you
    are using. This catch error behaves the same way as a subscribe error. In this catchError handler you can perform
    the logic you want implemented and then return throwError with the error object. This throwError will create a
    new Observable that will be caught in the error part of the Subscription so that your regular error handler will
    also be called.
    fetchPosts() {
        return this.http.get<{ [key: string]: Post[] }>('url')
            .pipe(
                map(// map logic here),
                catchError(error => {           <- using the catchError RxJS operator
                    // some logic like sending analytics
                    return throwError(error);   <- throwing the error using the throwError RxJS operator for subsequent
                                                    triggering of catch handler in the subscribe
                })
            );
    }


    Headers
    You can add custom headers to your request by passing an object as the last parameter to a get or post method.
    This object should contain the key headers and as a value you can pass a new HttpHeaders object that holds the
    key value pairs of the headers that you want to send.
    this.http.get('url', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' })
    });


    Query Params
    To add query params to your request you need to add the params property on the options object which you will pass
    as the last argument to the Http request. As values to the params, you will add a new HttpParams object but you
    will call the static method set on it instead of passing values to the new constructor. In this set method, you
    will pass the first argument which will be key and the second argument as the value of the query param.
    this.http.get('url', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: new HttpParams().set('custom', 'key')
    });
    Another way to pass query params is to create a new HttpParams object and then use the append method on the object.
    HttpParams objects are immutable. When you use the append method it returns a new HttpParams object which you must
    capture in order to add more params to it.
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    Then:
    this.http.get('url', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams
    });


    Response types
    If you want access to the whole response object you can inform Angular about the same by adding an observer property
    to your options object on the get call. The default value is body, but you can use response to get the whole response.
    this.http.get('url', { observe: 'response' });
    Another value that you can use the observe with is 'events'. This allows you to use the tap RxJS operator to tap
    into the lifecycle events of the requests. Each event is represented by a type with values ranging between 0 and 4.
    0 indicates that the request has been Sent from the client and 4 indicates that a response for this request has been
    received. You can use these values(they are enum attached on the HttpEventType object) to perform activities on
    your UI for a better experience.
    this.http.get(url, { headers, observe: 'events' })
        .pipe(tap((event) => {
            if (event.type === HttpEventType.Sent) { // do something }
        }));


    Response Data
    The response data type is defaulted to json. Hence, you receive objects which you can cast into predefined types.
    However, you have the option of receiving the response in others format say text. You can also convert it to a Blob.
    get(url, headers) {
        return this.http.get(url, { responseType: 'text' });
    }


    Request Interceptors
    Sometimes you may want to add headers/data to each request that you send from the UI. You need an interceptor for
    this. An interceptor is a class that implements the HttpInterceptor interface. It is then required to implement the
    intercept method. It gets two arguments, the request object and the next object. You must return the next.handle
    method to call the next interceptor in the chain with the request object passed to it as an argument
    export class AuthInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
            // add extra data here
            return next.handle(req);
        }
    }
    Now you need to add this class to the providers array like so:
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }];
    Here the HTTP_INTERCEPTORS is a token which points a bunch of classes to which we add our new AuthInterceptor
    class. The multi true says that for this provide there can be multiple classes.


    Modify request body
    Request objects are immutable and you will therefore need to create a new request object from
    the original one. You use the request.clone method for this purpose when modifying the request.
    export class AuthInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
            const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') })
            return next.handle(modifiedRequest);
        }
    }


    Response Interceptor
    You can manipulate not just requests but also responses. You do this by adding a pipe on the next handler. Inside
    the pipe you use the tap operator to get a handle on the response event and then you can modify the response
    as you please.
    export class AuthInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
            const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') });
            next.handle(modifiedRequest).pipe(tap((event: HttpEvent<any>) => {          <- Add pipe to handle
                if (event.type === HttpEventType.Response) {
                    // modify response from event.body
                    console.log('Response body is: ', event.body);
                }
            }));
        }
    }


    Multiple Interceptors
    You can add as many interceptors to the application. One important thing to remember is that the order in which
    you provide them in the providers array is the order in which they are executed. So order matters. To add them to
    the providers array you do this:
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },     <- Runs first
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }   <- Runs second
    ]

 */