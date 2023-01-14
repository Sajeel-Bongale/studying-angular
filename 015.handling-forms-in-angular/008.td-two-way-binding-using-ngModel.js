/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656480#notes

    You can use ngModel to display data using two way data binding on the element. Thus when using forms ngModel
    can be used without binding, with one way binding and with two way binding.

    So in the HTML template:
    <textarea
        name="questionAnswer"
        rows="3"
        [(ngModel)]="answer">
    </textarea>
    <p> Reply is: {{ answer }} </p>

    In the component.ts:
    answer: string = "";

 */