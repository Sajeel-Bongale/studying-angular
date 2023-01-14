/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656524#notes

    Two observables exposed by the form object allow you to observe and react to the changes in the values and
    status of the forms. These properties are :
    ngOnInit() {
        this.signupForm.statusChanges.subscribe(status => console.log) // Logs INVALID, PENDING OR VALID
        this.signupForm.valueChanges.subscribe(value=> console.log) // Logs the form value after every update
    }

 */