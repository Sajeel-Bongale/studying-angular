/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656364#questions/5246818

    When you deploy your Angular code with routing to a server, there may sometimes be an issue with route resolution.
    If you hit a link like mywebsite.com/foo/bar, it may so happen that the server looks to resolve the entire
    route with the path including /foo/bar.

    However, since we are using Angular we want the client side to resolve all routes ahead of the domain name by
    the client and not the server.

    Since the server does not know how to handle this route it may send a generic 404 page that maybe set by default
    on the server configuration.

    What we want is that the server only recognize the domain name and give the client a single HTML page, the
    index.html page each time, no matter what route is hit. For this reason we want the server to ignore all the
    content that comes after the domain name.

    We can achieve this in Angular by changing a setting that allows us to add a hash to the route in our app.
    So the route becomes mywebsite.com/#/foo/bar
    This causes the server to ignore everything ahead of the # and therefore tells the server to only deal with
    the preceding route which is the domain name. This causes the server to end up serving only the index.html
    each time, no matter what route is requested.

    To do this:
    In the routing or main app module, or wherever your routes are
    Router.forRoot(appRoutes, {useHash: true})


    NOTE: Always set the server side configuration to serve the index.html in case of 404 routes. This will send
    the index.html to the user and will allow the angular app to boot up and then show the 404 page configured
    on the client app.

 */