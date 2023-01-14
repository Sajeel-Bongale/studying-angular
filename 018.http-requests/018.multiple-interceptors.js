/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466378#notes

    You can add as many interceptors to the application. One important thing to remember is that the order in which
    you provide them in the providers array is the order in which they are executed. So order matters. To add them to
    the providers array you do this:

    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoggingInterceptor,
            multi: true
        }
    ]
 */