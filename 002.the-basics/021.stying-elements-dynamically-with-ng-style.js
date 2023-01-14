/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655914#overview

    We will look at ngStyle in this section. Unlike *ngIf, which is a structural directive, ngStyle
    is an attribute directive. Simply because, it looks like a regular attribute which DOM elements
    possess.

    They do not add or remove elements from the DOM. They only affect the element they are placed on.

    If in our ServerComponent, say we wanted to show the server status in a different way based on
    whether the server is online or offline(we simulate this using the Math.random() function in
    the component constructor.

    Then we add ngStyle on the element of our choice(the one which displays the status string).
    Now that's a built-in directive, you can recognize this on the ng at the beginning and ngStyle,

    The directive is pretty useless like this(ngStyle). We need to give it some configuration to do
    something, that is why we will use property binding on this directive and it's super important
    to understand that the square brackets are not part of the directive name, the directive name is
    just ngStyle, the square brackets indicate that we want to bind to some property on this directive
    and this property name happens to also be ngStyle.

    The ngStyle property accepts a JS object and we define key value pairs of style name and their
    values as values of the object, like so:
    <p [ngStyle]="{backgroundColor: getColor()}">

    Thus, ngStyle allows you to dynamically update the styles on an element based on some condition.


 */

