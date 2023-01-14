/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466426#questions

    Now we will add a loading spinner to the app when a request is made. We will also add error handling.

    For the loader we will get a spinner from loading.io/css website and create a component out of it with no ts logic
    @Component({
        selector: 'app-loading-spinner',
        template: '<div class="lds-hourglass"></div>',
        styleUrls: ['./loading-spinner.component.css']
    })
    export class LoadingSpinnerComponent {}

    We will ngIf this before a request is sent using an isLoading variable in the Auth component.

    Similarly we will add an error property to the auth component which will display the error message when there is one
    error: string = null;
    In the error handler of the subscribe method
    this.error = 'An error occurred';

    In the auth.component.html
    <div *ngIf="error" class="alert alert-danger">
        {{ error }}
    </div>

 */