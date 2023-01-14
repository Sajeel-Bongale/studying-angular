/*
    https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656114#overview

    In the view child we could access the elements present in the HTML of the component.

    However we saw that we can also project content from the parent into the child component using the ng-content
    directive.

    Using the local reference technique we can get access to this content using the ViewChild in the parent component.
    Since this content is actually residing in the parent and will later be passed down or projected into the child.

    This means that access to this element is restricted within the parent element using the local reference.

    To access this element in the child there is a different decorator which provides such an access. This decorator
    is @ContentChild()

    An example is
    Parent component
    <app-server-component>
        <p #projectionReference>My projected content</p>
    </app-server-component>


    Child Typescript file
    @ContentChild('projectionReference') projectedParagraphElement;

 */
