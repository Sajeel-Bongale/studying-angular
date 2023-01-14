/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656478#notes

    So far we have used ngModel for setting up elements as part of the template driven forms we have built. We
    can use it for another purpose. We can use it to set default values on the inputs.

    So:
    <select
        id="secret"
        [ngModel]="defaultQuestion"
        name="secret" >
        <option value="op1">Option 1</option>
        <option value="op2">Option 2</option>
    </select>
    In component.ts
    public defaultQuestion="op1";

    This will display Option 1 as the selected field in the selection element

    You can use the same procedure on input fields as well.


 */