/*
    Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649243#questions

    We looked at displaying data on the UI using string interpolation earlier. Now we will look at property binding.
    In many use cases, property binding performs the same operations as string interpolations and either can be
    used in those situations.

    Say, we want to create a button on the UI that allows the user to create new servers. We will do so in the template.
    We will also add a new variable to the servers component that is named allowCreateServer which holds a boolean
    value of false at the beginning.

    Lets say we want to disable the create new server button. So we can add a disabled attribute to it. However, this
    is hardcoded.

    We can then make the disabled property dynamic by "binding" it with the value that is held in the allowCreateServer
    property. We can then change the value of this property over a period of time to simulate some dynamic nature
    and see how it affects the button.

    To property bind this variable to the disabled attribute we will use this syntax:
    <button class="btn btn-primary" [disabled]="allowCreateServer">Add new server</button>

    With the square bracket syntax we are directly binding a value to the native HTML property called disabled on
    the button element.

    The convenient feature of property binding is that as the value in the property updates so will the attached value
    to the attribute.

 */
