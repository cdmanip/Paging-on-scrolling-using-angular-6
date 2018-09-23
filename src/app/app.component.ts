import { Component, OnInit } from '@angular/core';  
import { PhotodataserviceService } from './photodataservice.service';  
import { Photo, PhotoModel } from './photo'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Paging on Scrolling .. .';  
  photosList: Photo[] = [];  
  page: number = 1;  
  constructor(private service: PhotodataserviceService) { }  
  ngOnInit() {  
    this.getPhotos();  
  }  
  getPhotos() {  
    this.service.getPhotos(this.page).subscribe((res) => this.onSuccess(res));  
  }  
  onSuccess(res) { 
    console.log(res);  
    if (res != undefined) {  
      res.forEach(item => {  
        this.photosList.push(new PhotoModel(item));  
      });  
    }  
  }  
  onScroll()  
  {  
    console.log("Scrolled");  
    this.page = this.page + 1;  
    this.getPhotos();  
  }  
}
