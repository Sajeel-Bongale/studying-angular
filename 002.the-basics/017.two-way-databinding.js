/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655868#notes

    As compared to the previous section where we listen for an event on an input and then bind that value
    to a variable using a listener, you will find that we have an even easier way of binding to some data.

    With two-way data binding, we combine property and event binding.

    We use it therefore by combining the syntaxes, square brackets and within parentheses.

    We use a special directive called ngModel. We will bind this ngModel to serverName.

    This setup will trigger on the input event and update the value of server name in our component automatically.

    It will also update the value of the input element if we change server name somewhere else in the typescript file.

    If you set the serverName to a default value you will find that this value is already input in the input element.

    This is a nice and easy way of reacting to events in both directions.
 */