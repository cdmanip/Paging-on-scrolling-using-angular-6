import { Injectable } from '@angular/core';  
import { HttpClient , HttpHeaders  } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class PhotodataserviceService {
  constructor(private http: HttpClient) { }  
  getPhotos(page: number)  
  {  
    //return this.http.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json');
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_page='+page);  
  }  
}
