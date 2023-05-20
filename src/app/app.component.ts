import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';
  currentPostId = 0;

  selectedPost(postId: number){
    this.currentPostId = postId;
  }
}
