/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656484#notes

    We can group form controls together so that they appear under a single common property name in the form. It also
    helps to group the elements logically. For example, you can group name and age together as user details. You only
    need to add a wrapping div on the elements and add an ngModelGroup directive to it.

    In the HTML template:
    <div id="user-data" ngModelGroup="userData>
         <input
            type="text"
            name="username"
            ngModel
            required />
        <input
            type="age"
            name="age"
            ngModel
            required />
    </div>

    The elements will be grouped under the userData property in the form object.




 */