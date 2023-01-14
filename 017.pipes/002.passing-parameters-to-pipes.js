/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656570#notes

    You can pass parameters to a pipe like the date pipe so as to format the output as per you requirements.
    To do so you need to add a colon after the pipe name and then pass a value as a param. If the pipe takes multiple
    params then you can add new colons after the value for every param that you want to pass.

    {{ server.startDate | date: 'fullDate' }}
    {{ server.startDate | customPipe: 'firstParamValue': 'secondParamValue' }}
    
 */