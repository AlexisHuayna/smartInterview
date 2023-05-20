import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post.interface';
import { PostsService } from '../services/posts.service';
import { CommentsService } from '../services/comments.service';
import { UsersService } from '../services/users.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostProvider {

  constructor(
    private postService: PostsService,
    private commentService: CommentsService,
    private userService: UsersService,
  ) { }

  getPosts(): IPost[]{
    let posts:IPost[] = [];

    this.postService.getPosts().subscribe((data: any[]) => {
        data.map((item: any) => {
            posts.push(item as IPost);
        });
    });

    return posts;
  }

  getPost(postId: number): IPost|null {
    let post = null;

    this.postService.getPost(postId).subscribe((data: any) => {
        console.log(data);
        post = data as IPost;
    });

    return post;
  }
  
  createPost(post: IPost): IPost {
    this.postService.createPost(post).subscribe((data: any) => {
        post.id = data.id;
    })

    return post;
  }

  updatePost(postId: number, post: IPost): IPost {
    this.postService.updatePost(postId, post).subscribe((data: any) => {
        post = data
    });

    return post;
  }

  deletePost(postId: number): boolean {
    let wasDeleted = false;

    this.postService.deletePost(postId).subscribe((data: any) => {
        wasDeleted = data ? true : false;
    });

    return wasDeleted
  }

  async getPostDetail(postId: number) {
    
    let data = {};
    const post = (await firstValueFrom(this.postService.getPost(postId))) as IPost;

    if(post) {
        const comments = await firstValueFrom(this.commentService.getComments(postId));
        const user = await firstValueFrom(this.userService.getUser(post.userId));

        data = {
            post: post,
            comments: comments,
            user: user,
        }
    }

    return data;
  }
}
