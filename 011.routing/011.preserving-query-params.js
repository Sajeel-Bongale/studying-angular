/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656330#notes

    Suppose you move from one parent page and open a child route in this change. During this change you added
    new query params in the route.

    Now lets say you moved to another one of the child routes of the parent. In this transition you will lose
    your query params by default.

    There is a way to preserve the query params when navigating away from the page programmatically. To the
    options argument of the navigate method you add an additional property called queryParamsHandling and
    this property takes a string which can be merge which merges the new incoming params with the old ones
    or preserve, which keeps the params intact between route changes.

    For example:
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});

 */
