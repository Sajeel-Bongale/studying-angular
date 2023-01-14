/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466292#notes

    Observables are not a part of Angular. Instead they are imported from a package called rxJS.

    In this section we will use the interval observable provided by rxjs that emits a package every
    duration that you mention as an argument. It is similar to the setInterval function in JS.

    In the component.ts file
    import { interval, Subscription } from 'rxjs';

    intervalSubscription: Subscription;

    ngOnInit() {
        this.intervalSubscription = interval(1000).subscribe((count) => {
            console.log(count);
        });
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }

    Custom observables need to be unsubscribed at the time of component destruction or else they lead to
    memory leaks

 */