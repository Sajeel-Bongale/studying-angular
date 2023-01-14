/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655760#notes

    To add CSS to the component templates that we create, we can either use the CSS classes provided by Bootstrap
    or we can define our own CSS using the angular way.

    To add CSS we go to the app.component.css file and add regular CSS as we would do in a regular JS application.

    The stylesheet that you added css to, is actually referenced in the stylesUrl property of the app.component.
    This is the place where we can add css which Angular will recognize. You will notice that this is an array.
    This means that we could add multiple stylesheets.

    Besides the styleUrls approach we can also provide a style property (equivalent to template) which takes an
    array. In this array you will provide strings with style selectors just like you would within style tags.

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styles: [`
        h3 {
            color: 'red'
        }
      `]
    })

 */


