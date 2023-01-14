/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656292#notes

    We can navigate to a new route from within the typescript files. This is called programmatic navigation.

    To achieve this we simply need to inject the Router dependency into the component that we want to perform
    navigation in. Then we call the navigate method on the router service and to it we pass an argument of where
    we want to go to.

    In the arguments, similar rules of relative and absolute paths apply.

    So in the component.ts

    import {Router} from '@angular/router';

    constructor(private router: Router) {}

    someHandler() {
        this.router.navigate(['/servers']);
    }

 */