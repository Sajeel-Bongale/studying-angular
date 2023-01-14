/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656500#notes

    To setup the reactive forms approach, we first need to import the ReactiveFormsModule in the imports array of
    the AppModule.ts file. This module is different from the FormsModule which is used to setup the template driven forms.

    Once imported we can create the form object in the component where the form will reside. We create a signupForm
    object of type FormGroup. A FormGroup is nothing but a collection of elements in the form. Internally the
    ngForm in the template driven approach is also a collection of FormGroups. So the internal representation
    across both types of forms is the same.


    Creating the Form in the component
    We initialize it by calling new FormGroup and then setting up each property that we expect to see in the form
    as an input. We name these input properties as strings and they are objects that we need to create of type
    FormControl. This constructor takes three arguments, the initial value of the element, synchronous validators
    and third, asynchronous validators.
    So in the component:
    signupForm: FormGroup;
    ngOnInit() {
        this.signupForm = new FormGroup({
            'username': new FormControl(null),    <- Initial value of null being set in the username input field
            'email': new FormControl(null),
            'gender': new FormControl('male')
        });
    }


    

 */