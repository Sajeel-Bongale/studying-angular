/*

    Forms in Angular
    Angular allows you or it gives you a Javascript object representation of your form, making it simple for you to
    retrieve user values and to see the state of the form and to work with it.


    Template vs Reactive Forms
    Template driven approach
    In this, you set up your form in the template and Angular will automatically infer the structure of your form
    for you. It is suitable for small forms of minor complexity.
    Reactive approach
    You define the structure of the form in TypeScript code and then set up the HTML code. Finally, you manually
    connect the two. Using this approach you can fine tune every little piece about your form.


    Template Driven Form Setup
    You first need to add the FormsModule to the import array in the AppModule file.
    To create a template driven form, we need to add the ngModel directive to the input elements inside our form
    element and we need to add a regular name attribute and provide a descriptive value to it.
    <form>
        <input type="text" id="username" ngModel name="username" >
        <select id="secret" ngModel name="secret" >
            <option>Option 1</option>
            <option>Option 2</option>
        </select>
    </form>


    Handling Form Submission
    You can get a reference to the form object created by Angular. You first declare a template reference
    on the form using the #myForm syntax. However, this reference is of type HTMLFormElement and therefore does
    not have the data that you have created/registered using the ngModel syntax. To actually get a reference to the
    data you need to set a value of ngForm to the template reference that you have created.
    Since we declared a local reference we can also use the ViewChild decorator to access the form
    In HTML Template
    <form (ngSubmit)=onSubmit(myform) #myForm="ngForm"> <- ngForm keyword is mandatory
    In component.ts
    onSubmit(form: NgForm)
    // @ViewChild('f') signupForm: NgForm; <- Another way of referencing the form instead of passing it as an argument


    Form State
    Inside the ngForm object we have access to the state of the form. This includes things like whether the form is
    dirty, touched, valid and its inverse states. It also has the values of individual elements, their element references
    and the states of each individual elements. We can use these states to keep a track of the state of the form so
    that we can show hints, errors and validation messages to the user at runtime.


    Validating Forms
    As mentioned previously you can use the form state to find out the current form validity and take action accordingly
    like disabling the submit button. You can use HTML and Angular attributes/directives for this purpose.
    <form (ngSubmit)="myForm" #myForm="ngForm">
        // Inbuilt HTML required directive makes the form invalid if no value is entered.
        <input type="text" name="username" ngModel required />
        // Inbuilt Angular email directive adds email validation to the input element.
        <input type="email" name="username" ngModel required email />
    </form>
    In the component:
    @ViewChild('myForm') signupForm: NgForm;
    handleSubmit() {if(this.signupForm.valid) } // proceed for submission
    NOTE: Angular also adds classes on the form and elements such as ng-touched ng-valid based on the state of
    the form by default.


    Styling elements based on Angular class
    In CSS File
    input.ng-invalid.ng-touched, select.ng-invalid.ng-touched { // CSS here  }
    This kind of selector solves two problems. With the addition of input element it avoids the styling of the
    entire form (because the form also gets an .ng-invalid class). The chaining of the .ng-touched prevents the
    display of an error like state at the first load and allows the user a chance to type in the input.


    Showing error messages on the template
    To be able to show input specific messages like Please enter valid email in the input field we need to
    gain access to the input elements form state. For that we add a new local reference and attach a value
    of ngModel to it, just like we did for the whole form.
    <input type="email" name="username" ngModel required email  #email="ngModel"/>
    <p *ngIf="email.touched && !email.valid ">Please enter valid email address </p>


    Default Values
    We can bind to the ngModel directive default values we want to set on the inputs.
    <select id="secret" [ngModel]="defaultQuestion" name="secret" >
        <option value="op1">Option 1</option>
        <option value="op2">Option 2</option>
    </select>
    In component.ts
    public defaultQuestion="op1";       <- This will display Option 1 as the selected field in the selection element


    Two way binding using ngModel
    You can use ngModel to display data using two way data binding on the element.
    So in the HTML template:
    <textarea name="questionAnswer" rows="3" [(ngModel)]="answer"></textarea>
    <p> Reply is: {{ answer }} </p>
    In the component.ts:
    answer: string = "";


    ngModel with and without binding
    When using forms ngModel can be used without binding, with one way binding and with two way binding
    // Resultant ngForm object gets value object as
    {name: "value inserted in input text field", secret: "op1", answer: "value inserted in textarea text field"}
    <input type="text" id="username" ngModel name="username" >                  <- No binding
    <select id="secret" [ngModel]="defaultQuestion" name="secret" >             <- One way binding to set default value
        <option value="op1">Option 1</option>
        <option value="op2">Option 2</option>
    </select>
    <textarea name="questionAnswer" rows="3" [(ngModel)]="answer"></textarea>   <- Two way binding to output typed value
    <p> Reply is: {{ answer }} </p>


    Grouping form objects
    We can group form controls together so that they appear under a single common property name in the form. You only
    need to add a wrapping div on the elements and add an ngModelGroup directive to it and provide a value.
    In the HTML template:
    <div id="user-data" ngModelGroup="userData">
         <input type="text" name="username" ngModel required />
        <input type="age" name="age" ngModel required />
    </div>


    Adding radio buttons
    Adding radio buttons to forms is not that complex. The code for it is:
    <div class="radio" *ngFor="let gender of genders">
        <label>
            <input type="radio" name="gender" ngModel [value]="gender" /> {{ gender }}
        </label>
    </div>


    Setting and patching values in forms
    this.signupForm.setValue({
        userData: { username: 'my-generated-username', email: '' },
        secret: 'pet', questionAnswer: '', gender: 'Male
     });
    The argument object has to be an exact representation of the form and that it needs all the form control
    values to be set. A good use case for the setValue method is to pre populate the form at load time time with
    some default values. The downside to using this is. Also, once called, it will override all the values in the
    form from the previously set values.

    this.signupForm.form.patchValue({
        userData: { username: 'my-generated-username' }
    });
    The other approach is to use the patchValue method. It is available on the form object. This takes the resolved
    path to the property in the form that you want to update. It is useful to update single properties without touching
    the other values in the form.


    Resetting the form
    To reset a form we use the this.signupForm.reset() method. It clears everything written in the form as well as
    marks the form as untouched and pristine thereby resetting every available property on the NgForm object.
    this.signupForm.reset()




 */