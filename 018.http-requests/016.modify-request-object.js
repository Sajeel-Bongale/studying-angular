/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466372#notes

    To  modify a request you can need to create a new interceptor as discussed previously. However, you should
    remember that the request object is immutable and you will therefore need to create a new request object from
    the original one. You use the request.clone method for this purpose.
    export class AuthInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
            const modifiedRequest = req.clone({ headers: req.headers.append('Auth', 'xyz') })
            return next.handle(modifiedRequest);
        }
    }


 */