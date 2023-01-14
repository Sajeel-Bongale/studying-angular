/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656476#notes

    To be able to show input specific messages like Please enter valid email in the input field we need to
    gain access to the input elements form state. For that we add a new local reference and attach a value
    of ngModel to it, just like we did for the whole form.

    <input
        type="email"
        name="username"
        ngModel
        required
        email
        #email="ngModel"/>
    <p *ngIf="email.touched && !email.valid ">Please enter valid email address </p>


 */