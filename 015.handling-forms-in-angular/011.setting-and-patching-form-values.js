/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656488#notes

    Angular forms provides the ability to update form values based on some events like button click. Say we have a
    button that suggests a username and we want to update the current field for username with the generated username.
    We can do so using the setValue method on the ngForm.

    // This needs a javascript object that looks like the whole form.
    this.signupForm.setValue({
        userData: {
            username: 'my-generated-username',
            email: ''
        },
        secret: 'pet',
        questionAnswer: '',
        gender: 'Male
     });
    It has to be an exact representation of the form.
     A good use case for the setValue method is to pre populate the form at load time time with some default values.
     The downside to using this is that it needs all the form control values to be set.
     Also, once called, it will override all the values in the form from the previously set values.

    // Notice the form property.
    this.signupForm.form.patchValue({
        userData: {
            username: 'my-generated-username'
        }
    })
    The other approach is to use the patchValue method. It is available on
    This takes the resolved path to the property in the form that you want to update.
    It is useful to update single properties without touching the other values in the form.


 */