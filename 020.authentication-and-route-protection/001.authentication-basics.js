/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466410#questions

    When building SPAs using Angular, we decouple our front end from our back end and therefore we need to maintain
    authentication state on the client side too. Earlier when we used to use Server Side rendering ie, the server
    would generate and send the page to us on the fly and we used to manage authentication using sessions on the server
    side. This is however, not the case anymore as our apps are now SPAs and they manage routing at the client side.

    We implement a new flow where once a user from the client side has been authenticated(after login), the server
    sends the user a token, a JSON Web token(JWT) typically. It is a string that is encoded(not encrypted). It contains
    a lot of metadata.

    This token is generated on the server with a certain algorithm and a certain secret which only the server
    knows and only the server can validate incoming tokens for their validity because the idea is that the client,
    which is our browser, our Angular App, stores that token in the local storage of the browser and thereafter
    attaches the token to any request that it sends to the server which needs to be authenticated.

    The server then, is able to validate that token because the server did create that token with a certain algorithm
    and a certain private key, which is only known to the itself.

 */