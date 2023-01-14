/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656508#notes

    To add validators to Reactive forms, you do not set them in the template like you used to in the Template
    Driven approach. Here however, you will configure the validations in the signupForm object within each individual
    FormControl properties like so:
    this.signupForm = new FormGroup({
        // required is a static method on Validators and we only need to pass the reference to the method not call it.
        'username': new FormControl(null, Validators.required),
        // we can add multiple validators using an array as the second argument
        'email': new FormControl(null, [Validators.required, Validators.email])
    });

 */