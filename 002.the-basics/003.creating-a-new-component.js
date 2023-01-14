/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655710#notes

    The app-component on one hand is a normal Angular component but on the other hand, it's also kind of special
    because it serves as our root component.

    It is listed in the app module in this bootstrap array which tells Angular, that it is a special component, you
    should bootstrap the whole application with that component being the root component.

    So all other components we create will not be added to the index.html file, their selectors will be added to the
    app.component.html file or further inside other component files.

    To create a new component we will first create a new folder under the app folder. In you angular app, anything
    that is related to the app, such as new components should be placed inside the app folder.

    Having the folder name equal your component name is a good practice, and each component typically should have
    its own folder. Inside this folder we will create a typescript file(because angular uses typescript) and the
    naming convention dictates that we use the name of the component followed by a dot followed by the word
    component. So server.component.ts

    In this file we will create a class by the name of ServerComponent as convention dictates. Now we need to
    tell angular that this class is not a regular class but a special component class and we do so by declaring
    a Component decorator on top of it. We also need to import the file for the decorator Component.

    Decorators are a TypeScript feature which allow you to enhance your classes for example, enhance elements you use
    in your code.

    Now we need to pass a Javascript object to this component decorator to configure it. One important information
    piece of information in the configuration object is the selector. This defines the HTML tag by which you're able
    to use this component later in your other components templates. Typically, you prefix it with app- and then a
    fitting name, like server because it's a ServerComponent.

    The other important piece we need to have is the template and here let's reference an external file. This file
    needs to be created along with the ts file in the same folder. This file will hold the template(HTML code) for
    our component. Back in the ts file we will point to this HTML file as an argument to the templateUrl property.
    We will need to pass a relative path to the property.

 */



