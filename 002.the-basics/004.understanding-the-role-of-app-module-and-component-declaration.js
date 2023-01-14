/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655726#notes

    In the last section we created our own component, the server component. It's almost ready to be used but to
    use it, we need to change something about our app module.

    Angular uses components to build web pages and uses modules to basically bundle different pieces, such as
    components of your app into packages.

    What does this app module do, what is a module then?
    It's a bundle of functionalities of our app and it basically gives Angular the information which features does
    my app have and use.

    In it are four properties we set up on the object we passed to @NgModule, declarations, imports providers and
    bootstrap. We had a look at bootstrap, this was responsible for telling Angular which component should Angular
    be aware of at the point of time the whole application starts.

    We added a new component to Angular called ServerComponent and this new component now has to be registered here in
    the module so that Angular knows that this component exists because and this is important, by default Angular
    will not scan all your files. So if you don't tell it that the server component exists, it doesn't know it,
    just creating the file is not enough.

    We register new components in the declarations array. We already see the app component here because even though
    it's also used in bootstrap, it also needs to be declared to the app module before using it. After adding it
    to the declarations array and correctly importing it, Angular knows that we have a server component and that it
    is part of our app and with this, we can now finally use our component.

    The imports array simply allows us to add some other modules.

 */
