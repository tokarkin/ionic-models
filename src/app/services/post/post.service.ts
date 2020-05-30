import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost, ICreatePost } from './post.models';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
      private http: HttpClient
  ) {
  }
  getPost(){
    // all desctiption in models
    return this.http.get<IPost[]>(`https://ukspiritualdirectory.co.uk/wp-json/wp/v2/posts`);
  }
  createPost(data: ICreatePost){
    // all desctiption in models
    return this.http.post<IPost>(`https://ukspiritualdirectory.co.uk/wp-json/wp/v2/posts`, data);
  }
  updatePost(data: ICreatePost, id: number){
    return this.http.post<IPost>(`https://ukspiritualdirectory.co.uk/wp-json/wp/v2/posts/${id}`, data);
  }
  getPostById(id: number) {
     /**
      * you need to send as a query params id and ?password(if this post have a password) 
      * and context 'Scope under which the request is made; determines fields present in response.'
      */
    enum Context  {
        VIEW = 'view',
        EMBED = 'embed',
        EDIT = 'edit',
     }
    return this.http.get(`https://ukspiritualdirectory.co.uk/wp-json/wp/v2/posts/${id}`);
  }
  deletePost(id: number){
      // you need to send as query params force: type BOOLEAN
      // decription force: Whether to bypass Trash and force deletion.
    return this.http.delete(`https://ukspiritualdirectory.co.uk/wp-json/wp/v2/posts/${id}`);
  }
}


