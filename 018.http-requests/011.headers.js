/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466362#notes

    You can add custom headers to your request by passing an object as the last parameter to a get or post method.
    This object should contain the key headers and as a value you can pass a new HttpHeaders object that holds the
    key value pairs of the headers that you want to send.

    For example:
    this.http.get('url', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' })
    })

 */