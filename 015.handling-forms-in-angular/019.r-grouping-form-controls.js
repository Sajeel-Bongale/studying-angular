/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656512#notes

    To group form controls together inside a reactive form, you simply add a new FormGroup inside the existing form
    group as so:
    this.signupForm = new FormGroup({
        'userdata': new FormGroup({
            'username': new FormControl(null, Validators.required),
            'email': new FormControl(null, [Validators.required, Validators.email])
        }),
        'gender': new FormControl('male')
    });

    So you can add as many form groups inside the existing form groups.
    Now to connect the ts form to the HTML form you need to make some changes in the HTML structure.
    The form element will remain the same, however, you will need to create a div that now wraps the username and
    email divs housing the input elements. On this newly created div you will add the formGroupName attribute and
    bind it to the 'userdata' string that we created in the form object above. Angular now knows that the username
    and email fields lie inside a form group called userdata.
    Finally you will need to pass a resolved path to the *ngIf. Inside the signupForm.get you will now add this:
    <div formGroupName="userData">
        ...
        <input />
        <span *ngIf="!signupForm.get('userdata.username').valid && signupForm.get('userdata.username').touched" >
        </span>
    </div>



 */