/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656534#notes

    An observable can be thought of as a source of data. The entire observable architecture consists of
    an observable, an observer and the events that happen during a timeline when the two are alive.

    It follows the observable pattern.

    In the observer, in Angular, you write a subscriber function. Inside this function it can handle 3 types of data
    package. The success, failure and completion.

    Observables come with operator functions.

    Angular itself comes uses Observables heavily, like for reacting to changes to route params.

 */