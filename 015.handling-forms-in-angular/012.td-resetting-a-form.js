/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656492#notes

    To reset a form we use the this.signupForm.reset() method. It clears everything written in the form as well as
    marks the form as untouched and pristine thereby resetting every available property on the NgForm object.

    We can also use the setValue method learnt previously to reset the form by passing in empty/default values for
    every element in the form, however, it will not mark the classes as reset which will be done wih the reset method.

    Prefer using the reset method.

 */