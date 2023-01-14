/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655748#notes

    When creating components, we can add templates to the component either by using a templateUrl and passing
    an HTML file to it, or you can create an inline template and pass it to the template property.

    To try out the template you can replace the templateUrl property in app-servers and replace it with the template
    property and add all the content from the html file as a value to the template property.

    To add multi line content you can use backticks (``) to use the JS multiline string syntax.

    You should restrict templates to 3 lines of code. If you have more code, consider creating a separate file.


    @Component({
      selector: 'app-root',
      template: '<app-servers></app-servers><app-servers></app-servers>',
      styleUrls: ['./app.component.css']

    })

 */



