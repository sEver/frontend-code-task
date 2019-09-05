import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts;

  getPost(postId) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  fetchPosts() {
    this.posts = this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    return this.posts;
  }

  constructor(
    private httpClient: HttpClient,
  ) { }
}
