/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655804#notes

    It would be realistic if our server component contained some data about the type of server that we would create
    or display using that component. For now we will hardcode that data in the server component typescript file.

    We have created two properties serverId and serverStatus and assigned them hardcoded values. Now we want to
    display those values on the UI.

    This now happens using databinding, particularly string interpolation.

    In the template we will use double curly braces and reference the declared class variables as so:
    <p>Server with ID: {{serverId}} is {{serverStatus}} </p>
    This binds the output of the variables and applies it in the placeholder on the UI dynamically

    Any expression that can be resolved to a string can be output within the double curly braces. So
    {{ 'Server' }} is also valid syntax.

    You can also call functions here that return a string.

    The only condition is that you cannot write multiline expressions in it. You cannot therefore, use ifs and fors.
    You can however, use ternary operators.

 */
