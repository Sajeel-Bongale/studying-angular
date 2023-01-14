/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655742#notes

    Apart from creating components manually, you can also use the CLI to create them.

    To do so open a new terminal window. Lets say we want to create a server component that is inside another
    folder servers.

    We use the generate component command with the angular cli (ng). So:
    ng generate component servers

    There is also a shortcut called
    ng g c servers

    which does the same as above.

    When you run this, what it does it, it creates a new folder with the same files as we did when we created it
    manually. It also has a spec file which is used for testing the component.

    You can use this servers component to add two unique server components. Try that by adding two <app-server>
    components to your app-servers component and then replace the app-server component with the app-servers
    component in your app.component.

 */
