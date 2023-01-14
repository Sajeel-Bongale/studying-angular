/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656486#notes

    Adding radio buttons to forms is not that complex. The code for it is:
    <div class="radio" *ngFor="let gender of genders">
        <label>
            <input
                type="radio"
                name="gender"
                ngModel
                [value]="gender" />
            {{ gender }}
        </label>
    </div>

 */