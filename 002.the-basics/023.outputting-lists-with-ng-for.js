/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655930#overview

    Suppose we want to add the new server once created and output a list of all those servers. We can do so
    by using the *ngFor directive.

    For this we will create a new variable that holds an array of the server names. Now when the add server button
    is clicked, we want to add a new server to the list. So we will push the new server name on to the array.

    Now to dynamically display this list we will use the *ngFor directive. We will place the *ngFor directive on
    the element we want to render multiple times, like so:

    <app-server *ngFor="let server of servers"></app-server>

*/