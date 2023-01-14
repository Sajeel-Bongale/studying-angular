/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656100#overview

    By default any content (HTML Template) which you add within the opening and closing tags of a custom
    component will be ignored by Angular. If you want to achieve such a kind of projection of content by
    adding it within the tags of a custom component and wish that it is rendered within the child element
    you need something called content projection.

    To achieve this Angular provides a special directive called ng-content. If you add this tag to any
    place in the child component, any template passed from the parent within the tags of the child component
    will be displayed in it. ng-content basically marks the place where the projected content should appear.

    This is one way to avoid property binding in cases where simply passing data is not sufficient and you need
    to pass an actual template.

    Example:
    In parent html
    <app-server>My server is created</app-server>

    In child html
    <div>
        <ng-content></ng-content>  <- My server is created will be printed in place of this tag
    </div>

 */
