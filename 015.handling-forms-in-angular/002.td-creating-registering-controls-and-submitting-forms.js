/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656462#notes

    To create a template driven form you first need to add the FormsModule to the import array in the AppModule file.

    Now, once this is imported, Angular recognizes forms that are added to the templates of your components. However,
    to actually make them usable we need to perform some additional steps.

    To create a template driven form, we need to add the ngModel directive to the input elements inside our form
    element. However, only adding ngModel is insufficient. For the JS representation of the form to be created,
    Angular needs to know what the names of these inputs are. So we just need to add a regular name attribute and
    provide a descriptive value to it.

    To submit the form you obviously need a button with type submit. However, when you are creating the form you
    should use the ngSubmit listener provided by Angular instead of using the submit button. This listener allows
    you to call a method in response to form submission.

    To get the form object created by Angular you need some additional steps. You first declare a template reference
    on the form using the #myForm syntax. You can pass this reference to the ngSubmit listener. However, this
    reference is of type HTMLFormElement and therefore does not have the data that you have created/registered
    using the ngModel syntax. To actually get a reference to the data you need to set a value of ngForm to the
    template reference that you have created. So <form (ngSubmit)=onSubmit(myform) #myForm="ngForm">

    This is not the only way of getting access to the form element. Since we declared a local reference we can
    use the ViewChild decorator to access the form. So in the component we can access the form like that.

    So in the HTML template
    <form (ngSubmit)=onSubmit(myform) #myForm="ngForm"> <- Handling submission of forms in TD
        <input
            type="text"
            id="username"
            ngModel
            name="username" >

        <select
            id="secret"
            ngModel
            name="secret" >
            <option>Option 1</option>
            <option>Option 2</option>
        </select>
    </form>

    In the component.ts
    @ViewChild('f') signupForm: NgForm; <- Another way of referencing the form instead of passing it as an argument

 */