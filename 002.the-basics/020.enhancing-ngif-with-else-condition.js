/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655984#overview

    Sometimes you may want to have an element based on the opposite condition(else) of *ngIf.

    There could be another p tag that holds the string no server was created which you may want to display
    at the first page load.

    To achieve this we will create a new p tag and add a local reference(think of it as a marker) on it.
    Local references will be discussed in the further sections. Then we need to change the p into an
    ng-template component tag. This is a special tag that ships with Angular which allows you to mark
    a position in the DOM.

    In this ng template tag we will add the p tag, like so:
    <ng-template #noServer>
      <p>No server was created</p>
    </ng-template>

    Now to show this conditionally we need to add an else condition with the local reference alongside
    the *ngIf that we attached to the p tag above, like so:
    <p *ngIf="serverCreated; else noServer">Server was created</p>

    You can also always use *ngIf with the reverse way to create the else


 */

