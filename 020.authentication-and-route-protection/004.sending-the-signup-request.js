/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466426#questions

    We will now send the request when the user clicks on the signup form.
    onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    if (this.isLoginMode) {
      // implement later
    } else {
      const email = authForm.value.email;
      const password = authForm.value.password;
      this.authService.signup(email, password)
        .subscribe(responseData => {
          console.log(responseData);
        }, error => {
          console.log(error);
        });
    }
    authForm.reset();
  }

 */