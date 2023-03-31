import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'http://103.57.220.123:8080/';
  constructor(private http: HttpClient) { }
  saveComment(comment: any):Observable<Comment>{
    return this.http.post<Comment>(this.url+'m/comment',comment);
  }
  findCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.url+'m/comment/' + id);
  }

  averageScore(id: number): Observable<number>{
    return this.http.get<number>(this.url+"m/score/" + id);
  }
  starsScore(id: number): Observable<number>{
    return this.http.get<number>(this.url+"m/stars/" + id);
  }
  countComment(id: number): Observable<number>{
    return this.http.get<number>(this.url+"m/countComment/" + id);
  }
}
