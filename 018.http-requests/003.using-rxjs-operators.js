/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466334#notes

    You can use Observables to transform data that you receive from the HTTP requests before you send it to the final
    subscribe method. To do so you need to run a pipe method on the get call. This pipe will consume the get response
    and transform it based on the operators (map, filter) that you pass to it as arguments and eventually spit
    out a new Observable that you will consume as a subscription.
    You can add multiple operators in a comma-separated list and then will execute in the order they are written.

    this.http.get('https://backend-for-angular-d841a-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({
                ...responseData[key],
                id: key
              });
            }
          }
          return postsArray;
        })
      )
      .subscribe(response => {
        console.log(response);
      });


 */