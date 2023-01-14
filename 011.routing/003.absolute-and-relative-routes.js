/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656286#notes

    As seen in the last section we can add different kinds of values to the routerLink attribute.
    There is also a difference in the way we can pass arguments to the directive without using
    the property binding approach. Angular evaluates the arguments and then behaves differently
    for different types of values.

    If current path is localhost:4200/home

    <li><a routerLink="/users"> Home </a></li>         <- Absolute path; will resolve to localhost:4200/users
    <li><a routerLink="users"> Home </a></li>          <- Relative path; will resolve to localhost:4200/home/users
    <li><a routerLink="./users"> Home </a></li>        <- Relative path; will resolve to localhost:4200/users
    <li><a routerLink="../users"> Home </a></li>       <- Relative path; will resolve to localhost:4200/users

 */
