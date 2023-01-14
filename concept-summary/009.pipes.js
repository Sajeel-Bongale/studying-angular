/*

    What and why Pipes?
    Pipes allow you to transform the data you output on the UI instead of actually having to change the data in the
    component. An example would be to display a name in uppercase that is stored in the name property in the component.
    {{ name | uppercase }} -> will print value of name in uppercase


    Passing params to pipes
    You can pass parameters to a pipe like the date pipe so as to format the output as per you requirements.
    To do so you need to add a colon after the pipe name and then pass a value as a param. If the pipe takes multiple
    params then you can add new colons after the value for every param that you want to pass.
    {{ server.startDate | date: 'fullDate' }}
    {{ server.startDate | customPipe: 'firstParamValue': 'secondParamValue' }}


    Chaining Pipes
    You can chain multiple pipes to incrementally get the desired output. However, one important thing to remember
    is that the order of the pipes matter. Angular will evaluate pipes starting with the left most and then passing
    the result of this to the next pipe on the right. If placed incorrectly, a chain of pipes could result in an error.
    {{server.startDate | date: 'fullDate' | uppercase ]} -> Works correctly
    {{server.startDate | uppercase  | date: 'fullDate' ]} -> Throws an error


    Custom Pipes
    To create a custom pipe you need to export a class that has a @Pipe decorator on top of it. You declare a name
    property in the configuration. Then implement the PipeTransform interface on this pipe class. This forces you
    to implement the transform method which gets a value as the first argument. You return a value after custom
    manipulation of this value property.
    @Pipe({'name': 'shorten'})
    export class ShortenPipe implements PipeTransform{
      transform(value: any) {
        if(value.length > 10 ) return value.substr(0, 10) + '...';
        return value;
      }
    }
    In the template
    {{ server.name | shorten }} -> Use it like so


    Passing parameters to custom pipes
    To add parameters to our custom pipe we need to accept more arguments in the transform method. You can have
    multiple arguments for multiple params and can name them anything you want.
    transform(value: any, limit: number) {
      if(value.length > limit ) return value.substr(0, limit);
      return value;
    }
    In the template
    {{ server.name | shorten: 5 }} -> Use it like so


    Filter Pipes
    See 017.pipes/006.filter-pipes.js for a detailed reference

    Pure and Impure Pipes
    By default, angular does not trigger a re-render when the data on which it is filtering changes. For example,
    if you have a filter set up on an ngFor running on an array or object, Angular will not trigger a rerender if data
    within the array or object changes. It will only trigger the rerender if a parameter on the pipe changes.
    This is because triggering a rerender on every data change is expensive and could slow down the application.
    For this reason, Angular does not provide a built-in pipes like filter.
    However, you can force angular to react to changes in data and cause the rerender to trigger by adding a
    pure: false key value pair inside the Pipe decorator configuration object like so
    @Pipe({
      'name': 'filter',
      'pure': false
    })
    

    Async Pipes
    Sometimes we want to apply a pipe on a value that may be a promise or an observable. In essence an asynchronous
    value that can resolve at any given time. If you simply output the value on the screen you see something like
    [object Object]. What happens is that angular while parsing looks at the value once and sees that its a promise
    object, prints it on the screen and leaves. It does not come back to evaluate the value once it has been resolved.
    There is a pipe that works under such conditions, called the async pipe. This pipe does not show any data until
    the promise has been resolved but shows it once it is available
    To use it do this:
    {{ appStatus | async }}
    In the component:
    appStatus = new Promise((resolve, reject) => {...asynchronous code here })


 */