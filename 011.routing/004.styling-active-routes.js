/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656288#notes

    To highlight a tab which is currently active in the navigation pane, Angular provides a directive
    to which you supply a class. When the route is active the class will be applied to this tag.
    Obviously the class is something custom that you write as per your requirements and it will be added
    when the path matches the path specified as an argument to the directive.

    The directive is called routerLinkActive and to it you pass the class name that you want to attach
    when the route is active.

    One important thing about this directive is that does not perform exact matching by default. What this
    means is that when the route is say localhost:4200/users and if you also have a route configured for
    localhost:4200, the routerLinkActive tab placed on both the HTML elements for the above links will become
    active. Since localhost:4200/users includes localhost:4200 which is a route that has basically nothing.
    So both routes get the active class.

    In such a scenario we need to tell Angular that the localhost:4200 route should be matched exactly for
    nothing in the URL after the domain name.
    We do so by adding an additional directive along with routerLinkActive called routerLinkActiveOptions.
    To this we property bind an object that has one property called exact. We set a true value on this property
    Now th link for the nothing tag will only be active when there is actually nothing in the route.

    So:
    <li role="presentation" routerLinkActive="active" [routerLinkActive]="{exact: true}">
        <a routerLink="/">Home</a>
    </li>
    <li role="presentation" routerLinkActive="active">
        <a routerLink="/users">Users</a>
    </li>

 */