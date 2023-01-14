/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656060#overview

    Refer to the cmp-databinding-start project for examples of this section.

    This app is running all the html in one component as of now, in the app component.
    There is a lot of code in it and we can split this up because that's not ideal having all that logic in a
    single component.

    Splitting it up makes sense because that would also allow us, if we build a bigger app, to reuse parts of that.

    We can create two new components, the cockpit component and the server-element component. We can do so using
    the command line shortcut ng g c.

    Once these components are created, we can start moving template code from the app.component.html file to the
    cockpit.component.html template file. Along with that we will also be required to move the methods that the
    component and its template will be calling.

    This causes the issue that the serverElements array that was being used in app html which has now been moved
    to the cockpit html starts giving an error. For now we will let that error be.

    We will move the two variables newServerName and newServerContent to the cockpit for now.

    Next we will move the template for the server element from the app component to the server-element template
    file. There are a few errors here too as it will try to refer to the variables that we previously had access
    to in the app component. Again, ignore these for now.

    Then, we will add the custom component names in the app component to call upon the new templates that we
    split up in to separate files.

    To solve these errors we will need to pass data between components and that of course is a super important task
    we haven't touched yet but we will dive deeper into next.

 */
