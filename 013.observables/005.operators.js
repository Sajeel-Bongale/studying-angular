/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466302#notes

    Operators are like a magic feature and they turn observables into awesome constructs.

    You may want to manipulate data that comes in the packages that observers receive from Observables. You can
    of course perform such manipulations in the subscriber callbacks. However, rxjs provides a more elegant way
    of doing this using operators.

    There are tons of built in operators that allow you to transform your data into another form and then finally
    consume it using the subscriber.

    To use an operator you need to add it to the pipe method. You can add as many operators as you want using a
    comma separated list in a pipe method and they will run one after the other.

    Once added to the pipe, you will need to chain the subscribe method to the pipe method, otherwise the
    transformations from the pipe will be lost and not stored, Chaining it to the subscribe method is important.


    To use an operator, do this:
    import { map } from 'rxjs/operators';

    this.intervalSubscription = customObservable
        .pipe(
            filter((data: number) => {
                return data > 0;
            })), 
            map((data: number) => {
                return 'Round ' + (data + 1);
            }))
        )
        .subscribe(
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

 */