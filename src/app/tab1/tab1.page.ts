import { PostService } from './../services/post/post.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private postService: PostService
  ) {
    postService.getPost().subscribe(value => console.log(value));
  }

}
