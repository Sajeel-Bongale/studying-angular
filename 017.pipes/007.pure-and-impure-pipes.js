/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656586#notes

    * WATCH THIS LECTURE TO UNDERSTAND THE CONCEPT *
    By default, angular does not trigger a re-render when the data on which it is filtering changes. For example,
    if you have a filter set up on an ngFor running on an array or object, Angular will not trigger a rerender if data
    within the array or object changes. It will only trigger the rerender if a parameter on the pipe changes.
    This is because triggering a rerender on every data change is expensive and could slow down the application.
    For this reason, Angular does not provide a built-in pipe like the filter.

    However, you can force angular to react to changes in data and cause the rerender to trigger by adding a
    pure: false key value pair inside the Pipe decorator configuration object like so

    @Pipe({
      'name': 'filter',
      'pure': false
    })

    This will cause updates in data to be reflected on the UI.
    NOTE: Such an operation is expensive and should be used only if absolutely necessary.

 */