/*

    There is a new way of injecting a service in Angular. You can now simply add an object to the decorator
    Injectable and then tell the service where the provider should be injected using the providedIn property.

    It looks like this
    @Injectable({
        providedIn: 'root' <- Adds service to the AppModule providers, it is an alternative to providers array in app.module.ts
    })
    export class MyService {}

 */