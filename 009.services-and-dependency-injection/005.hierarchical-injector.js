/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656218#overview

    The way the providers array in components works is that, it makes the same instance of that service available
    to that component as well as all its child components.

    There are other ways of injecting services into an Angular application. They are:

    Adding a service to
    1. providers array of AppModule - Same instance of Service is available Application-Wide
    2. providers array of AppComponent - Same instance os Service is available for all Components (but not for
                                         other services)
    3. providers array of last Component - Same instance of Service is available for the Component and all its
       in HTML hierarchy                   child components
 */