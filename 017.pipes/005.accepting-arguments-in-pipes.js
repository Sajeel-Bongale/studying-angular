/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656582#notes

    To add parameters to our custom pipe we need to accept more arguments in the transform method. You can have
    multiple arguments for multiple params and can name them anything you want.

    Then you will call the pipe with the arguments from the UI by using the colon operator.
    transform(value: any, limit: number) {
      if(value.length > limit ) {
        return value.substr(0, limit);
      }
      return value;
    }

    In the template
    {{ server.name | shorten: 5 }} -> Use it like so

 */