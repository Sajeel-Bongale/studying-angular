/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656082#overview

    View Encapsulation is the process by which Angular prevents the bleeding of CSS from parent components
    into child components. This means that CSS added to the CSS file of one component is always restricted
    to that component only. The CSS rules applied in that component will not be available for use on other
    components.

    Angular does this by adding a unique identifier attribute which it generates at runtime to each of the
    components that get rendered on the DOM. The attributes look something like _ngcontent-ejo-0.

    Note that these attributes are added to each of the elements within the component template elements. So
    each div, span and any other element inside the component gets this tag attached to it.

    Then, at the time of processing the CSS, Angular attaches these unique ids to the CSS rules as attribute
    selectors. This ensures that only the elements of the same component are styled with the rules in the
    provided CSS stylesheet with the component.

    This is an emulation of the shadow DOM feature that is native to HTML, CSS. However, Angular chooses to
    implement the View Encapsulation mechanism itself in this manner.

    You can override the default ViewEncapsulation provided by Angular by adding an encapsulation property to
    the component where you want to override it.
    You write:
    @Component({
      selector: 'app-server-element',
      templateUrl: './server-element.component.html',
      styleUrls: ['./server-element.component.css'],
      encapsulation: ViewEncapsulation.Emulated
    })

    encapsulation can take 3 different values:
    1. ViewEncapsulation.Emulated
    The default Angular way of adding custom and unique id attributes to the components and elements as we saw above

    2. ViewEncapsulation.None
    Completely removes adding custom attributes. It is like writing HTML by hand. Causes the CSS rules to be globally
    applied as a result. NOTE: Be careful when using none for the last reason.

    3. ViewEncapsulation.ShadowDom
    Puts the component into the native shadow dom implemented according to the HTML  standards. May not work in older
    browsers.

 */
