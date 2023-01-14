/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466412#questions
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466414#questions
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466418#questions
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466420#questions

    We first need to create a signup/login page that takes in a email id and password. The same page will be used for
    both sign up and login. We then create a route for authentication and add this component to the route. Then, in
    our backend we will enable authentication. For this, on Firebase, go to real time databases -> rules and then
    change the rules to this:
    { "rules": {
            ".read": "auth != null",  // 2022-12-29
            ".write": "auth != null",  // 2022-12-29
    }} <- this denies access to database unless user is authenticated
    Then you go to the authentication module in Firebase and enable email&password sign-in method. You can
    pick and choose any mechanism you want. For this we are adding email & password.
    Then we start creating users. For this we will use the UI that we created and start sending requests for user
    creation to the Firebase server.


 */