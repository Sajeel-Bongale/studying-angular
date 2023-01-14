/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655772#notes

    The selector property has to be unique across your application as well as amongst all other third party libraries
    you may be using.

    The selector property allows angular to recognize custom created components. There are 3 ways in which you can
    define component selectors, but it should be remembered that the way they are defined, is the way they should
    be referenced in the HTML code while utilizing them in the DOM

    For Example, selectors can be defined in one of the 3 ways as shown below
    @Component({
      selector: 'app-server', <- Regular approach and followed convention   Usage              <app-server></app-server>
      OR
      selector: '[app-server]', <- Component usage will now happen as an attribute  Usage       <div [app-server]></div>
      OR
      selector: '.app-server', <-  Component usage will now happen as a class   Usage     <div class="app-server"></div>
      template: '<app-servers></app-servers><app-servers></app-servers>',
      styleUrls: ['./app.component.css']
    })


    NOTE: selectors in angular cannot be defined using ids or psuedo states such as hover.

 */


