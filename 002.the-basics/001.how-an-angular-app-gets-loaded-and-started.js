/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655700#notes

    Once the application is started, we can see it run on localhost:4200. This is where our development server hosted
    by the CLI or spun up by the CLI will host our Angular application.

    Now the content we see here can be changed by going to the app.component.html of file in our app folder and in
    there, we can output some text let's say "I'm the app component" in a h3 tag. When we run this, we will see it
    on the UI and it automatically has the bootstrap text style.

    How does the server hosting our app know that it should render the content of app.component.html here?

    You could argue it's the only component we have right now but that is not the reason and actually, that is not
    the file served by the server. Instead the index.html file is served by the server.
    Remember that it was mentioned that Angular is a framework which allows you to create single page application...
    The index.html is the single page which is served

    Now if you have a look at this file, we see this is a normal HTML file. The body of this file is very interesting.
    We see this app-root tag thing with nothing in between.

    Somehow this index.html file seems to have changed and it did, app-root is definitely not a default HTML tag.
    Instead this is one of our own components. The CLI created one for us, the root component of our application.

    The component which will tie together our whole application in the end and all the files in the app folder
    which have component in their name,they are all related to this component.

    In the app.component you can see that we have this @Component decorator. Inside it you'll see that we have this
    selector property which assigns a string as a value and this string holds app-root. Now this clearly is the same
    text as in our index.html file and this actually is the information Angular needed to be able to replace this part
    here in this index.html file with the template of this component.

    The component having this selector and the template on this component simply is the content here in this
    app.component.html file. This is what happens at the startup.

    The missing information is how is Angular triggered, how is it kicked off to actually run over our body here of
    this index.html file?
    The answer is in the final index.html file, getting served in the browser and we can verify this by inspecting the
    source code here, we got a couple of script imports at the end. These are injected by the CLI automatically, so
    that is why we don't see it here in the raw index.html file, here we don't have any script imports but whenever
    this ng serve process rebuilds our project, it will create bundles, Javascript script bundles and automatically
    add the right imports in the index.html file, a little convenience functionality for us.


    So in the final file, these script imports here are present and these script imports will contain our own code
    too. So these script files are therefore executed and they're actually the first code to be executed
    and that is just something you have to keep in mind, is the code we write in our main.ts file that is why it's
    called main.

    This is the first code which gets executed. Most importantly, the line
    platformBrowserDynamic().bootstrapModule(AppModule),
    this now bootstraps starts our Angular application by passing an app module to this method.

    Now if we have a look at the AppModule file, we actually see that somehow we kind of like with the component have
    this strange @ thing here, we get this bootstrap array which basically lists all the components which should be
    known to Angular at the point of time it analyzes our index.html file and here the circle closes.

    Summary of Angular app bootstrap(startup):

    1. index.html gets compiled by CLI with necessary script imports added to the body tag
       these scripts are main, polyfills, runtime, styles, vendor
    2. when app loads in UI, index.html gets provided to browser for running
    3. all scripts get loaded which are mentioned in step 1
    4. main.js (transpiled version of main.ts) kicks off angular bootstrap
    5. main.ts calls bootstrapModule method with AppModule as argument
    6. appModule contains AppComponent as component that needs to be bootstrapped at start time
    7. app.component.ts (or js or transpiled version of that file) gets loaded
    8. this file has app-root as selector mentioned in its metadata
    9. DOM now identifies AppComponent as the component to load when it encounters app-root component
    10. AppComponent template from its HTML gets shown on browser

 */
