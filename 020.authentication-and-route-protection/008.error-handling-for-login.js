/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466432#questions

    We will now add error handling for login
    We will use a common method to handle errors on signup and login since they behave in a similar manner and output
    error messages in the error object which we can use to run a switch case on, to identify/display the correct error
    message.

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct';
                break;
        }
        return throwError(errorMessage);
    }

    We then pipe the catchError to both signup and login
    return this.http.post<AuthResponseData>(loginUrl, body).pipe(catchError(this.handleError));
    return this.http.post<AuthResponseData>(signUpUrl, body).pipe(catchError(this.handleError));


 */