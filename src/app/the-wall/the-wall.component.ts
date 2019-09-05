import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-the-wall',
  templateUrl: './the-wall.component.html',
  styleUrls: ['./the-wall.component.less']
})
export class TheWallComponent implements OnInit {
  posts;
  filterBy;
  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    this.posts = this.postsService.fetchPosts();
  }
}
