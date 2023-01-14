/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656092#overview

    You can add a local reference on any HTML element in your template using the syntax #myLocalReference.
    This variable holds a reference to the whole HTML element along with its properties.

    You can use this local reference only and only in your template, not in the ts file.

    Example:
    <div>
        <input #myInput type="text">

        <p [innerText]="myInput.value"></p>
    </div>
 */
