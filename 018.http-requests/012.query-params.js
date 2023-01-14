/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466364#notes

    To add query params to your request you need to add the params property on the options object which you will pass
    as the last argument to the Http request. As values to the params, you will add a new HttpParams object but you
    will call the static method set on it instead of passing values to the new constructor. In this set method, you
    will pass the first argument which will be key and the second argument as the value of the query param.

    this.http.get('url', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: new HttpParams().set('custom', 'key')
    });

    Another way to pass query params is to create a new HttpParams object and then use the append method on the object.
    HttpParams objects are immutable. When you use the append method it returns a new HttpParams object which you must
    capture in order to add more params to it.
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    Then:
    this.http.get('url', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams
    });

 */