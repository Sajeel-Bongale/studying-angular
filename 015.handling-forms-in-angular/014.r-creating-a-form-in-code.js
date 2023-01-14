/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656502#notes

    Once we have added the form of FormGroup type to the component we initialize it. It is a good idea to initialize
    the form in the ngOnInit method as the template has not been rendered at that point of time.

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