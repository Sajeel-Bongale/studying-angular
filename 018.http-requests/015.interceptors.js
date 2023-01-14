/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466370#notes

    Sometimes you may want to add headers/data to each request that you send from the UI. This data can be in the form
    of custom headers or auth tokens or other things. To do so you need to add an interceptor to the app. An
    interceptor is a class that implements the HttpInterceptor interface. It is then required to implement the
    intercept method. This method takes the HtttpRequest generated that needs to be sent as the first argument and
    the next object which has a handle method which is used to call the next interceptor in the chain. You must return
    the next.handle method with the request object passed to it as an argument. Failing to do so will result in an error.

    export class AuthInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
            console.log('Request intercepted');
            return next.handle(req);
        }
    }
    Now you need to add this class to the providers array like so:
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }];
    Here the HTTP_INTERCEPTORS is a token which points a bunch of classes to which we add our new AuthInterceptor
    class. The multi true says that for this provide there can be multiple classes

 */