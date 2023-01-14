/*
    Link:

    By default, Angular HttpClient pulls out the response body from the Http response and passes it to the subscription.
    If you want access to the whole response object you can inform Angular about the same. To do so, add the observe
    property to your options object. This has a default value of body which is why you see only the body in the
    response. But you can change it to response and then it will present to you the whole response object.
    this.http.get('url', { observe: 'response' });

    There is another value that you can use the observe with. It is 'events'. When the value is set to events you can
    add a tap operator inside the pipe to tap into all the event phases that this request goes through. If you log
    the event objects that you receive as an argument in the tap you will see that it has a property called type with
    values like 0, 1, 2, 3, 4, etc. These values represent the state or phase the event is going through. 0 means sent
    from the client, 4 means response received.

    You can use these values(they are enum attached on the HttpEventType object) to perform activities on your UI for
    a better experience. For example, there is a Sent value on the enum that is designated with 0. This event is sent
     when the request has been successfully dispatched from the client.
    this.http.get(url, {
        headers,
        observe: 'events'
    })
    .pipe(tap((event) => {
        if (event.type === HttpEventType.Sent) {
          // do something
        }
    }));

 */