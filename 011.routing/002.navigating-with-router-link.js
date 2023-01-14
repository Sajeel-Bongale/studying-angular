/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656284#notes

    We want to allow the user to be able to click on a link to be able to navigate to different routes instead
    of having the user to type the routes in the address bar manually.

    To do so we cannot use the href attribute on a link tag as that causes the application to reload as this is
    the default behaviour. Because of this the Angular application loses its state and starts a brand new app.
    This is definitely not the behaviour that is appropriate.

    Angular provides a directive that we can attach instead of the href. It is the routerLink directive.
    It does not cause the app to reload but yet changes the route in the url and as a result displays the
    correct component when the route is reached.

    To use the router link directive add it to the anchor tags on the component which is responsible for
    displaying the navigation links to the user.

    You can use the directive in two ways.
    1. Directly provide the path with a slash
    2. Property binding with the routerLink. Once you do this you need to provide
        i. a variable name or
        ii. string inside the double quotes
        iii. an array that defines the absolute path to the route you want to visit

    <li><a routerLink="/"> Home </a></li>
    <li><a routerLink="/users"> Users </a></li>
    <li><a [routerLink]="serverPath"> Servers </a></li>             <- i
    <li><a [routerLink]="'/servers'"> Servers </a></li>             <- ii
    <li><a [routerLink]="['/servers']"> Servers </a></li>           <- iii



 */