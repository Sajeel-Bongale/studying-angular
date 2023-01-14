/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466346#notes

    Quite often when we build larger applications a large part of the code starts finding its way into the
    component code. While some of it may be rightfully in its place, some can be moved to action specific
    services. Http requests and responses for a particular type suit this category well. Therefore, we should
    move our Http requests for model items such as blog posts in its own service. This leaves the component
    code lean and left to deal with component related work. We can create a Posts service and make it contain
    all the Http related tasks like get, post, delete for blog posts.

    @Injectable({
      providedIn: 'root'
    })
    export class PostsService {

        constructor(private http: HttpClient) {}

        createAndStorePosts(title: string, content: string) {
            const postData: Post = {title: title, content: content};
            this.http
                .post<{ name: string }>(
                    'https://backend-for-angular-d841a-default-rtdb.firebaseio.com/posts.json',
                    postData
                )
                .subscribe(responseData => {
                    console.log(responseData);
                })
        }

        fetchPosts() {
            this.http.get<{[key: string]: Post[]}>('https://backend-for-angular-d841a-default-rtdb.firebaseio.com/posts.json')
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
              });
        }
    }

    In the app component:
    constructor(private postsService: PostsService) {}
    ngOnInit() {
        this.postsService.fetchPosts();
    }
    onCreatePost(postData: { title: string; content: string }) {
        // Send Http request
        this.postsService.createAndStorePosts(postData.title, postData.content);
    }


 */