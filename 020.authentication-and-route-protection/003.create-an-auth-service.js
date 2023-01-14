/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466422#questions

    We will now create an auth service that has a sign up method which our auth component will make use of.
    We get the url for signup from the Firebase docs. We need to add the api key as a query param to this. We
    can find this key in the Project settings of our app on Firebase.
    interface AuthResponseData {
        idToken: string; email:	string; refreshToken: string; expiresIn: string; localId: string;
    }

    @Injectable({ providedIn: 'root' })
    export class AuthService {
        constructor(private http: HttpClient) {}
        signup(email: string, password: string) {
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNAAcJRbb69wtlRtX_qb9SGB2W5Hi3rCo';
            return this.http.post<AuthResponseData>(url, { email, password, returnSecureToken: true });
        }
    }

 */