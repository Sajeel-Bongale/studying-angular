/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656522#overview

    To add a custom asynchronous validator to your controls you need to create a function that returns either
    a Promise<any> or Observable<any> when the validation is complete within the resolve method

    This would result in a function like such
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

    Now to make this work we will need to add it to the email FormControl third argument of async Validators array
    similar to sync validators in the second argument. You do not need to bind it to this as we are not using
    any class property within the method

 */