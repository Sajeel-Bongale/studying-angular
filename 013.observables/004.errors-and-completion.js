/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466298#notes

    Observables can also have packages that are errors. We can create errors in our custom observable too.
    One important thing is that when an error happens in an observable it ends. No further events occur.
    NOTE: The complete callback does not trigger after the error occurs.

    You can manually emit errors and complete events from within an Observable and then consume them
    on the observer as so:
    In the component.ts file
    import { interval, Subscription, Observable } from 'rxjs';

    intervalSubscription: Subscription;

    ngOnInit() {
        const customObservable = Observable.create((observer) => {
            let count = 0;
            setInterval(() => {
                observer.next(count);       <- Observer gets methods like next, error and complete on it
                if(count === 2) {
                    observer.complete();
                }
                if(count > 3) {
                    observer.error('Count is greater than 3);
                }
                count++;
            }, 1000);
        });
        this.intervalSubscription = customObservable.subscribe(
            (count) => {
                console.log(count);
            },
            (error) => {
                console.log('error occurred ', error);
            },
            () => {
                console.log('Observable completed');
            }
        );


    }
    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }


 */