/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656188#overview

    Similar to the regular switch case in JS we also have a ngSwitch structural directive in Angular. It allows
    for the selection of a case based on a certain value.

    Switch cases can be used when there may be many ngIf statements in the code.

    To use a switch case you define a variable in the typescript file and then use it in the HTML template.

    <div [ngSwitch]=value>
        <p *ngSwitchCase="5">The value is 5</p>
        <p *ngSwitchCase="10">The value is 10</p>
        <p *ngSwitchCase="100">The value is 100</p>
        <p *ngSwitchDefault>Value is default</p>
    </div>


 */