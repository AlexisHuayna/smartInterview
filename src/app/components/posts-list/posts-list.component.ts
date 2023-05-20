import { Component, EventEmitter, Output } from '@angular/core';
import { IPost } from 'src/app/interfaces/post.interface';
import { PostProvider } from 'src/app/providers/posts.provider';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  
  posts: any;
  selectedPost?: IPost;

  @Output() selectedPostEvent = new EventEmitter<number>();

  constructor(private postProvider: PostProvider) {
    this.posts = [];
  }

  ngOnInit() {
    this.posts = this.postProvider.getPosts();
  }

  onSelect(post: IPost) {
    this.selectedPost = post;
    this.selectedPostEvent.emit(this.selectedPost.id);
  }
}
