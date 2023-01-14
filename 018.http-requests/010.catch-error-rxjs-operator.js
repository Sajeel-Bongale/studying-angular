/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466358#notes

    Sometimes you may be using operators to modify your response that comes back from an HTTP call before subscribing
    to it. In the event that an error occurs, you may want to catch it before the subscription/error handler is called.
    For example, you may want to send some analytics to your analytics server. And then you want to display the error
    message on the UI. To do this, you can use the catchError operator after the map or any other operator that you
    are using. This catch error behaves the same way as a subscribe error. In this catchError handler you can perform
    the logic you want implemented and then return throwError with the error object. This throwError will create a
    new Observable that will be caught in the error part of the Subscription so that your regular error handler will
    also be called.

    fetchPosts() {
        return this.http.get<{ [key: string]: Post[] }>('url')
            .pipe(
                map(responseData => {
                    const postsArray = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({
                                ...responseData[key],
                                id: key
                            });
                        }
                    }
                    return postsArray;
                }),
                catchError(error => {
                    // some logic like sending analytics
                    return throwError(error);
                })
            );
    }

 */