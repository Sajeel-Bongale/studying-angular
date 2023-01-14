/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466296#notes

    To create a custom observable do this
    In the component.ts file
    import { interval, Subscription, Observable } from 'rxjs';

    intervalSubscription: Subscription;

    ngOnInit() {
        const customObservable = Observable.create((observer) => {
            let count = 0;
            setInterval(() => {
                observer.next(count);       <- Observer gets methods like next, error and complete on it
                count++;
            }, 1000);
        });
        this.intervalSubscription = customObservable.subscribe((count) => {
            console.log(count);
        });
    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }

 */