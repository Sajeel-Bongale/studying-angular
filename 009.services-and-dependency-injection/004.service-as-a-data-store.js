/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656218#overview

    You can use a service as a centralized data store in an Angular app.
    To do so, you create a service as shown previously and declare a variable that will be your data store.

    In this variable store any data that you want. This variable will now be available when the service is
    imported by other components.

    export class DataStoreService {
        myStore = {data: 'Some Data'};
    }

    Now use this in the component as

    console.log(this.dataStoreService.myStore);

 */