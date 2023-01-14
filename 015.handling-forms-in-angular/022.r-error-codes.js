/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656520#notes

    To show a specific error based on the type of error that is being generated (due to the use of multiple Validators)
    we can use the errors property on the FormControl.

    We can add two spans wrapped in the parent span( which holds the basic checks for valid and touched) and inside
    this wrapping span we can have two separate spans (one for each type of error). Then we can *ngIf on the child
    spans with the condition for each type of error

    <span *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched">
        <span *ngIf="signupForm.get('userData.username').error['nameIsForbidden']">
            This name is invalid
        </span>
        <span *ngIf="signupForm.get('userData.username').error['required']">
            This name is invalid
        </span>
    </span>

 */