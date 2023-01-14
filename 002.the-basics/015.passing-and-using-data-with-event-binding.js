/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655832#notes

    Let's say before the create server button, we also have a label, server name and then more importantly, we have
    an input.

    To this input we can bind a listener for the input event and create and attach a method for this purpose.
    Now we somehow want to output what the user entered.

    For this purpose there is a $event property that Angular provides. We can pass $event to the function
    $event, a super important is kind of a reserved variable name you can use in the template when using event binding

    $event will simply be the data emitted with that event. So input and click are default events provided by the DOM
    They ship some data when they are fired, the click event gives us an object which for example holds the coordinates
    where we clicked and the input event also gives us some data, some information about the event. We can capture
    this data with $event passed as an argument to the method.

    NOTE: $event does not necessarily have to be the first argument in an event listener attached to a component
    on a template. It can be on any position of the argument list. Angular will automatically attach the event data
    to this object and keep it consistent even when not used as a first param in the argument list. This happens
    because $event is a reserved special keyword in Angular.

    Inside this object is the target property which holds the element which triggered the event. We can find the value
    property on it and use it to assign the current content of the input to a new variable in the servers component.

    We can then output the string being typed using string interpolation as we studied before.

 */

