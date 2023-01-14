/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655784#notes

    So far we have only output static content on the screen. Now we want to display some data that is not
    hard coded in the template. For this we use something called data-binding

    What is databinding?
    Databinding is basically communication between your typescript code and your HTML (the template) that the user sees.
    You may have fetched some content from the server and want to display to the user. Then you will need to output
    it dynamically on the template which is the only piece that the user can see and interact with.

    This is where databinding comes in. It is the communication link between the two.
    There are different types of communication modes or databinding types.

    1. Output - Display data fetched from typescript into template
    a. String Interpolation              ->                  {{ data }}
    b. Property Binding                  ->                  [property]="data"

    2. Input - React to user events
    a. Event binding                     ->                  (event)="expression"

    3. Two way databinding - Combination of both above
    a. Using ngModel                     ->                  [(ngModel)]="data"

 */
