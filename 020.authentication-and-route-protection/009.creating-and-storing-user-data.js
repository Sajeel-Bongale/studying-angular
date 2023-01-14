/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466434#questions

    We will store and use user data for maintaining state in the application.
    We will first create a user model
    export class User {
        constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date) {}

        get token() {
            if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
              return null;
            }
            return this._token;
        }
    }

    To the auth service we add a user Subject which will hold the logged in user object and will be used as the object
    to check if authentication is valid or not in the application
    In the auth service
    user = new Subject<User>();

    login(email: string, password: string) {
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNAAcJRbb69wtlRtX_qb9SGB2W5Hi3rCo';
        return this.http.post<AuthResponseData>(url, { email, password, returnSecureToken: true }).pipe(
            catchError(this.handleError),
            tap((responseData) => {
              this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, responseData.expiresIn);
            })
        );
    }

    private handleAuthentication(email: string, localId: string, idToken: string, expiresIn: string) {
        const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000));
        const user = new User(
            email,
            localId,
            idToken,
            expirationDate
        );
        this.user.next(user);
    }

 */