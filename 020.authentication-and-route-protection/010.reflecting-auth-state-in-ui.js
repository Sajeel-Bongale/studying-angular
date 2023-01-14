/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466436#questions/11594752

    Once the login is successful, we will navigate the user away from the authentication page to the recipes page.
    authObservable
        .subscribe(responseData => {
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        });

    Then, we will mark the user as logged in and send this information forward using the subject. Any component
    (like the header) interested in knowing the current status of the user can subscribe to the subject and make
    changes in the template accordingly.
    In header.component.ts
    ngOnInit() {
        this.userSubscription = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
    }
    Based on the this.isAuthenticated variable we can show the user different links in the navbar and also a logout
    button when the user is logged in.



 */