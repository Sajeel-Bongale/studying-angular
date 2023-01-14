/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/14466368#notes

    The response type is defaulted to json. That is why you receive objects which you can cast into predefined types.
    However, you have the option of receiving the response in others format say text. You can also convert it to a Blob.
    get(url, headers) {
        return this.http.get(url, {
            responseType: 'text'
        });
    }

 */