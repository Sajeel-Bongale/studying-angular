/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656210#overview

    As mentioned previously, you should not create services manually as Angular provides a much better solution.
    It is called Dependency Injection.

    What is a Dependency?
    A dependency is something a class of ours will depend on.

    For example if an account component depends on a loggingService because we want to call a method in that service,
    the dependency injector simply injects  an instance of this class(dependency) into our component automatically.

    Now all we need to do is we need to inform Angular that we require such an instance. We add the required
    dependency as an argument to the constructor of the class we want the depenedency injected in like so:
    constructor(private myService: MyService) {}
    where MyService is the name of the class which defines the service.

    In addition to importing the created service we need to inform Angular that such a type/service exists and
    that Angular should make(provide) this service when called for.

    To do so you add an extra property to the Component decorator. It is providers array. In this array you will
    provide the name of the service that you want provided.


 */