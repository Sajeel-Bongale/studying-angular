/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656576#notes

    You can chain multiple pipes to incrementally get the desired output. However, one important thing to remember
    that is the order of the pipes matter. Angular will evaluate pipes starting with the left most and then passing
    the result of this to the next pipe on the right. If placed incorrectly, a chain of pipes could result in an error.
    {{server.startDate | date: 'fullDate' | uppercase ]} -> Works correctly
    {{server.startDate | uppercase  | date: 'fullDate' ]} -> Throws an error

 */