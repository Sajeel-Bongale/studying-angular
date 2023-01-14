/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656578#notes

    To create a custom pipe you need to export a class that has a @Pipe decorator on top of it. In this decorator,
    you need to pass the configuration object that has a name property which will be the name you use to invoke the
    pipe in your templates.

    You need to implement the PipeTransform interface on this pipe class, although that is not mandatory. Then you
    need to create a transform method, that takes in a value as the first argument. This method should then return
    the desired output in the format that you want based on your custom logic.

    Finally you need to add the newly created pipe class to the declarations array of the module.

    @Pipe({
      'name': 'shorten'
    })
    export class ShortenPipe implements PipeTransform{
      transform(value: any) {
        if(value.length > 10 ) {
          return value.substr(0, 10) + '...';
        }
        return value;
      }
    }
    In the template
    {{ server.name | shorten }} -> Use it like so
 */