/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656094#overview

    Local references defined previously are only accessible in the HTML template. To access a child element
    from within the typescript file we need to make use of something called the ViewChild.

    The ViewChild is a decorator that allows the selection of a child element declared in the HTML template
    of the component using the local reference defined on the child element.

    For native HTML elements you can use a local reference by using the #myLocalReference syntax. For custom
    components you can directly refer to the components using their types. The examples are shown below.

    HTML template
    <input type="text" #myInput>
    <app-server-component></app-server-component>

    Typescript file
    @ViewChild('myInput') textInput;
    @ViewChild(ServerComponent) server: ElementRef;

    The properties in the typescript file hold a native element in case of native HTML elements selected and
    a type called ElementRef in case of selection of a custom component. This ElementRef has a property called
    nativeElement on it that allows you to access the component HTML within it.

 */
