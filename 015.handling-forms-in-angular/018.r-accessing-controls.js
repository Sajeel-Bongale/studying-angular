/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656510#notes

    To show error messages you need access to the form control elements in the template.
    We show an error in a span as such:
    <input type="text" id="username" formControlName="username" />
    <span *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched" >
    </span>

    The get method takes an argument of name or path to resolve which form control we want to verify before showing
    the error. To add CSS we can follow the same approach as Template Driven forms.

 */