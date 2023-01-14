/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655904#overview

    If we want to conditionally show the Server was created message, such that the no server was created message
    does not persist on page load, we can use a directive provided by angular, called ngIf

    *ngIf is preceded by a star and this star indicates that this directive is a structural directive.
    A structural directive is one which manipulates the DOM.

    To add it to your program add it as so:
    <p *ngIf="serverCreated"> Server was created </p>

    For ngIf to work we need to provide a condition within the quotes of the directive. This condition should
    evaluate to a boolean at runtime.
    
 */