/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656528#notes

    Just like Template driven forms, we can set values of the form, patch values on the form and also reset them.

    this.signupForm.setValue({
        'userData': {
            'username': 'Max',
            'email': 'test@test.com
        },
        'gender': 'male',
        'hobbies': []
    });

    this.signupForm.patchValue({
        'userData': {
            'username': 'Anna'
        }
    });


    this.signupForm.reset();



 */