import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image1 } from 'src/app/model/Image1';
import { ImageNoId } from 'src/app/model/ImageNoId/ImageNoId';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = 'http://103.57.220.123:8080/';

  constructor(private http: HttpClient) {
  }
  saveImage(image: ImageNoId): Observable<ImageNoId> {
    return this.http.post<ImageNoId>(this.url+'image', image)
  }
  editImage(image: Image1): Observable<Image1> {
    return this.http.post<Image1>(this.url+'image', image)
  }
  findByAccount_IdAAndStatusImg1(accountId:number):Observable<Image1[]>{
    return this.http.get<Image1[]>(this.url+`image/a/1/${accountId}`)
  }

  findByAccount_IdAAndStatusImg2(accountId:number):Observable<Image1[]>{
    return this.http.get<Image1[]>(this.url+`image/a/2/${accountId}`)
  }
}
