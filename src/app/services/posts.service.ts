import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private host: string;

  constructor(private httpClient: HttpClient) {
    this.host = 'https://jsonplaceholder.typicode.com';
  }

  getPosts(){
    const url = `${this.host}/posts`;
    return this.httpClient.get<any[]>(url);
  }

  getPost(postId: number){
    const url = `${this.host}/posts/${postId}`;
    return this.httpClient.get(url);
  }
  
  createPost(data: any) {
    const url = `${this.host}/posts`;
    return this.httpClient.post(url, data);
  }

  updatePost(postId: number, data: any) {
    const url = `${this.host}/posts/${postId}`;
    return this.httpClient.put(url, data);
  }

  deletePost(postId: number) {
    const url = `${this.host}/posts/${postId}`;
    return this.httpClient.delete(url);
  }
}
