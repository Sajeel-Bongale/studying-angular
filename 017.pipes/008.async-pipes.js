/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656588#notes

    Sometimes we want to apply a pipe on a value that may be a promise or an observable. In essence an asynchronous
    value that can resolve at any given time. If you simply output the value on the screen you see something like
    [object Object]. What happens is that angular while parsing looks at the value once and sees that its a promise
    object, prints it on the screen and leaves. It does not come back to evaluate the value once it has been resolved.

    There is a pipe that works under such conditions, called the async pipe. This pipe does not show any data until
    the promise has been resolved but shows it once it is available

    To use it do this:
    {{ appStatus | async }}

    In the component:
    appStatus = new Promise((resolve, reject) => {...asynchronous code here })

 */