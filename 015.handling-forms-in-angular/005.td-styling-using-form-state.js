/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656472#notes

    We can use the classes provided by Angular to style our inputs with something like a red border if the
    input is invalid.

    We can add something like
    input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {
        // CSS here
    }

    This kind of selector solves two problems. With the addition of input element it avoids the styling of the
    entire form (because the form also gets an .ng-invalid class). The chaining of the .ng-touched prevents the
    display of an error like state at the first load and allows the user a chance to type in the input.




 */