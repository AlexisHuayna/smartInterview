import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private host: string;

  constructor(private httpClient: HttpClient) {
    this.host = 'https://jsonplaceholder.typicode.com';
  }

  getUser(userId: number){
    const url = `${this.host}/users/${userId}`;
    return this.httpClient.get<any>(url);
  }
}
