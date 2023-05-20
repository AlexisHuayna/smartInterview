import { Component, Input, SimpleChanges } from '@angular/core';
import { PostProvider } from 'src/app/providers/posts.provider';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent {
  @Input() postId!: number;
  postDetail?: any;

  constructor(private postProvider: PostProvider) {}

  async getPostDetail() {
    this.postDetail = await this.postProvider.getPostDetail(this.postId);
    console.log(this.postDetail);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['postId'] && changes['postId'].currentValue != 0) {
      this.getPostDetail();
    }
  }
}
