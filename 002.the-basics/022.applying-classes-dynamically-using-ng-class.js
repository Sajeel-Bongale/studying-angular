/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655924#overview

    We saw ngStyle in the previous section. We will look at ngClass in this one.

    While ngStyle allowed us to change the CSS style itself, ngClass allows us to dynamically add or remove
    CSS classes.

    In the server.component.css file we will add a new class online.

    ngClass also, like ngStyle, also only works as intended when using property binding. So we need to provide
    it a JS object just like ngStyle. For ngClass object works like this. The keys are the CSS class names and
    the values are the conditions determining whether this class should be attached or not.

    <p [ngStyle]="{backgroundColor: getColor()}"
       [ngClass]="{'online': serverStatus === 'online'}">


 */