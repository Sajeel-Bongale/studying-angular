/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656584#notes

    You can even add pipes to for loops to run inside the template. Since pipes manipulate the view, an ngFor running
    in the template is also a view. You can therefore create a pipe that decides which elements to keep or remove from
    an array. This could be called a filter pipe.

    You could create a filter pipe that shows or removes elements from an array based on a filter string that you
    create in a separate input on the UI.

    @Pipe({ 'name': 'filter'})
    export class FilterPipe implements PipeTransform {
      // here value is the array that will be sent as input to the pipe
      // filterString is the value in the input element -> String that you want to filter on
      // propName is the key of the object that you want to filter on on the array item -> like name or status
      transform(value: any, filterString: string, propName: any): any {
        if(value.length === 0 || filterString.length === 0) {
          return value;
        }
        const resultArray = [];
        for(let item of value) {
          if(item[propName] === filterString) {  // if filter string matches status or any other property of the item
            resultArray.push(item);
          }
        }
        return resultArray;
      }
    }
    Then to add it to the UI
    you create an input with ngModel bound to filterString
    and then
    <input [(ngModel)]="filteredStatus" type="text" />
    <li *ngFor="let server of servers | filter:filteredStatus:'status'" >

 */