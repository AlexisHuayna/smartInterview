import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  
  private host: string;

  constructor(private httpClient: HttpClient) {
    this.host = 'https://jsonplaceholder.typicode.com';
  }

  getComments(postId: number){
    const url = `${this.host}/posts/${postId}/comments`;
    return this.httpClient.get<any[]>(url);
  }
}
