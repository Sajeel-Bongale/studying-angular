/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656066#overview

    In the server-element component if we have a look at its HTML file, you'll see that we try to access the element,
    the single server element and therefore, we should create a property in this TypeScript file, called element
    which represents our server.

    We define a type for it by attaching a JS object to it using the colon (:) syntax.

    It would be great if we could access, or better, provide a value to this element property from the app component.
    Because the app component is where we want the data to come from.

    So lets say we want to pass this data from the app component to the sever-element component. In the app component,
    we can add an ngFor to create as many server-element components as there are items in the serverElements variable
    array. If we bind to the property element like so:
    *ngFor="let serverElement of serverElements"
    [element]="serverElement"
    we find that this results in an error on the console.
    It says: Can't bind to element since it isn't a known property of the app-server-element.

    However, we have defined the element as a property of the above component.
    So why can't we access it?
    Simple answer, because by default, all properties of components are only accessible inside these components,
    not from outside.

    So you have to be explicit about which properties you want to expose to the world so to say.

    So if you want to allow parent components to be able to bind to this property, you need to add a decorator.
    The decorator we need to add is @Input(). We need to execute the Input decorator with ().

    With this in place, now we are successfully exposing this property to the world. Now now any parent component
    hosting our server element component, implementing it through its selector, is now able to bind to element.

    This is how you can set up custom property binding on your own events, exposing your own properties
    to the components where you implement these components through the selector.


 */
