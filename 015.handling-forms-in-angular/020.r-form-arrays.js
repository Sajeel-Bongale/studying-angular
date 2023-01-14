/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656514?start=243#notes

    FormArray can be used to add multiple dynamic inputs to the form.
    For example: if you need to add multiple hobbies to your form here is how to do it:
    Add a new hobbies field to the FormGroup object:
    signupForm = new FormGroup({
        ...
        'hobbies': new FormArray([]) // empty array as initializer
    })

    Then you can click a button on the UI to trigger a handler that adds a new form control to the FormArray as such
    onAddHobby() {
      const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control);
    }

    Then you can display the newly created form control on the UI by connecting it to an input element by
    running a for loop on the FormArray which will spit out FormControls.
    <div *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index;>
      <input [formControlName]="i" />
    </div>

    Bind the name of the form control to the dynamically generated index.
    On submit of the form you will find the array values in the form object dynamically generated.

 */