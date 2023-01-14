/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656518#notes

    To add a custom validator to your list of validators you need to create a function that returns an object with
    any string as key and true as value when the validation fails. It should return null when the validation passes.
    This would result in a function like such:
    forbiddenNames(control: FormControl) : { [s: string] : boolean } {
      if( ['Anna', 'Chris'].indexOf(control.value) !== -1) {
        return { 'nameIsForbidden': true };
      }
      return null;
    }

    Now to make this work we will need to add it to the username FormControl second argument of Validators array.
    This will still result in an error because the this of when referring to the function name does not refer to the
    correct this as the method is not being called from within the class but from somewhere within the Angular ecosystem.
    To solve this issue we simply bind it the correct this (the class this) when inserting it into the Validators array.
    signupForm = new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        ...
    });


 */