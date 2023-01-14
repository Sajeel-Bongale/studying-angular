/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466430#questions

    We will now introduce the login for the user
    login(email: string, password: string) {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNAAcJRbb69wtlRtX_qb9SGB2W5Hi3rCo';
        return this.http.post<AuthResponseData>(url, {
            email,
            password,
            returnSecureToken: true
        });
    }


    In the auth component we will refactor our code to use a common observable
    onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;
    let authObservable: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }
    authObservable
      .subscribe(responseData => {
        console.log(responseData);
        this.isLoading = false;
      }, errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      });
    authForm.reset();
  }

 */