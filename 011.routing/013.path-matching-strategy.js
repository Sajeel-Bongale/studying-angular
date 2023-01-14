/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656336#notes

    By default, Angular matches paths by prefix. That means, that the following route will match
    both /recipes  and just /
    { path: '', redirectTo: '/somewhere-else' }

    Angular will give you an error here, because that's a common gotcha: This route will now ALWAYS
    redirect you! Why?
    Since the default matching strategy is "prefix", Angular checks if the path you entered in the URL
    does start with the path specified in the route. Of course every path starts with ''
    (Important: That's no whitespace, it's simply "nothing").

    To fix this behavior, you need to change the matching strategy to "full" :
    { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }

    Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example).

 */
