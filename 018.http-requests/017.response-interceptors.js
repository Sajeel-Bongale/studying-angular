/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466376#notes

    You can manipulate not just requests but also responses. You do this by adding a pipe on the next handler. Inside
    the pipe you use the tap operator to get a handle on the response event and then you can modify the response
    as you please.
    export class AuthInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler) {
            const modifiedRequest = req.clone({
                headers: req.headers.append('Auth', 'xyz')
            });
            next.handle(modifiedRequest).pipe(tap((event: HttpEvent<any>) => {
                if (event.type === HttpEventType.Response) {
                    // modify response from event.body
                    console.log('Response body is: ', event.body);
                }
            }));
        }
    }


 */