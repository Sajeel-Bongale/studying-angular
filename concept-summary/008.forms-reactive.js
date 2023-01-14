/*

    Setting up Reactive forms
    To setup the reactive forms approach, we first need to import the ReactiveFormsModule in the imports array of
    the AppModule.ts file.  We then create a signupForm object of type FormGroup in the component where the form
    resides. A FormGroup is nothing but a collection of elements in the form.

    Creating the form in code
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

    Connecting the form to the template
    <form [formGroup]="signupForm">
        // as a string without property binding to attach an individual form control to an input element.
        <input formControlName="username" />
        <input type="email" formControlName="email" />
        <div>
            <input type="radio" value="male" formControlName="gender" />
            <input type="radio" value="female" formControlName="gender" />
        </div>
    </form>
    These two additions (with all individual formControlNames on each input) will connect the two forms together.


    Submitting the form
    To submit a form, you use the same (ngSubmit) listener like you did in the Template Driven approach.
    Here however, we do not need to pass the form as an argument to the submit handler because, the form is itself
    created and available on the typescript file.
    <form [formGroup]="signupForm" (ngSubmit)='handleSubmit()"></form>
    In the component.ts
    handleSubmit() { console.log(this.signupForm) }


    Adding Validators
    To add validators to Reactive forms, you do not set them in the template like you used to in the Template
    Driven approach. Here however, you will configure the validations in the signupForm object within each individual
    FormControl properties like so:
    this.signupForm = new FormGroup({
        // required is a static method on Validators and we only need to pass the reference to the method not call it.
        'username': new FormControl(null, Validators.required),
        // we can add multiple validators using an array as the second argument
        'email': new FormControl(null, [Validators.required, Validators.email])
    });


    Accessing controls to show errors
    To show error messages you need access to the form control elements in the template. We use the get method on the
    form to retrieve an input element. It takes an argument of name or path to resolve which form control we want
    to verify before showing  the error. To add CSS we can follow the same approach as Template Driven forms.
    <input type="text" id="username" formControlName="username" />
    <span *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched" >
    </span>


    Grouping controls
    To group form controls together inside a reactive form, you simply add a new FormGroup inside the existing form
    group as so:
    this.signupForm = new FormGroup({
        'userdata': new FormGroup({
            'username': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email])
        }),
        'gender': new FormControl('male')
    });
    To bind it by connecting the ts form to the HTML form you will need to add a wrapper div to the input elements you
    added inside the form group above. Then to this div you pass the formGroupName directive and add the value of the
    newly created form group to create the connection. The accessors using the get method need to be updated too, to
    reflect the correct dot separated path from the form to the actual form control.
    <div formGroupName="userData">
        ...
        <input />
        <span *ngIf="!signupForm.get('userdata.username').valid && signupForm.get('userdata.username').touched" >
        </span>
    </div>


    Form Arrays
    FormArray can be used to add multiple dynamic inputs to the form.
    Add a new hobbies field to the FormGroup object:
    signupForm = new FormGroup({
        ...
        'hobbies': new FormArray([]) // empty array as initializer
    });
    Then you can display the newly created form control on the UI by connecting it to an input element by
    running a for loop on the FormArray which will spit out FormControls.
    <div *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index;>
      <input [formControlName]="i" />
    </div>
    In the component.ts file
    To dynamically add a new entry to the Form Array we register a click handler
    onAddHobby() {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control);
    }


    Custom Validators
    To add a custom validator to your list of validators you need to create a function that returns an object with
    any string as key and true as value when the validation fails. It should return null when the validation passes.
    This would result in a function like such:
    forbiddenNames(control: FormControl) : { [s: string] : boolean } {
      if( ['Anna', 'Chris'].indexOf(control.value) !== -1) {
        return { 'nameIsForbidden': true };
      }
      return null;
    }
    In the component.ts file
    signupForm = new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        ...
    });


    Error codes
    To show a specific error based on the type of error that is being generated (due to the use of multiple Validators)
    we can use the errors property on the FormControl.
    <span *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched">
        <span *ngIf="signupForm.get('userData.username').error['nameIsForbidden']">
            This name is invalid
        </span>
        <span *ngIf="signupForm.get('userData.username').error['required']">
            This name is invalid
        </span>
    </span>


    Custom Async Validators
    To add a custom asynchronous validator to your controls you need to create a function that returns either
    a Promise<any> or Observable<any> when the validation is complete within the resolve method
    forbiddenEmails(control: FormControl) : Promise<any> | Observable<any>  {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'test@test.com) {
            resolve( {'emailIsForbidden': true} ) // resolve with an object like we did in sync validators
          } else {
            resolve(null);
          }
        }, 1500);
      })
      return promise;
    }
    signupForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails]),
        ...
    });


    Set, Patch and Reset Form Values
    Just like Template driven forms, we can set values of the form, patch values on the form and also reset them.
    this.signupForm.setValue({
        'userData': {
            'username': 'Max',
            'email': 'test@test.com
        },
        'gender': 'male', 'hobbies': []
    });
    this.signupForm.patchValue({
        'userData': { 'username': 'Anna' }
    });
    this.signupForm.reset();


    New way of clearing forms
    As of Angular 8+, there's a new way of clearing all items in a FormArray.
    (<FormArray>this.recipeForm.get('ingredients')).clear();
    The clear() method automatically loops through all registered FormControls (or FormGroups) in the FormArray and
    removes them. It's like manually creating a loop and calling removeAt() for every item.
    @Pipe({'name': 'shorten'})
    export class ShortenPipe implements PipeTransform{
      transform(value: any) {
        if(value.length > 10 ) return value.substr(0, 10) + '...';
        return value;
      }
    }
    In the template
    {{ server.name | shorten }} -> Use it like so

    
 */