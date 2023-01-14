/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656504#notes

    To connect the form created in the typescript file to the HTML template we need to make use of some directives.
    The prerequisite is of course, that our form object should be created using the FormGroup and FormControl classes
    like shown in the previous example.

    Then  to connect the two we add

    <form [formGroup]="signupForm"> to the form element and

    <input formControlName="username" /> as a string without property binding to attach an individual form control
    to an input element.
    These two additions (with all individual formControlNames on each input) will connect the two forms together.

 */