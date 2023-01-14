/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656072#overview

    Sometimes you don't want to use the same property outside of the component as you use inside of it.

    For this you can assign an alias, you can pass an argument to @Input with the property name as you want to have it
    outside of this component, and now from the outside, from the component where you implement this component, you
    now have to target srvElement if you want to bind to this property. Like so:

    Parent template:
    <app-server-element [srvElement]="serverElement"></app-server-element>

    Child template:
    @Input('srvElement') element: {type: string, name: string, content: string};

 */
