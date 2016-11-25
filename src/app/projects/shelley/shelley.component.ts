import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';
import { Slide } from '../../shared/carousel/carousel.component';

@Component({
  selector: 'app-shelley',
  templateUrl: './shelley.component.html',
  styleUrls: ['./shelley.component.scss']
})
export class ShelleyComponent implements OnInit {
  interval = 7000;
  slides: Slide[] = [];

  zoomImgUrl = '';

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
    this.createSlides();
  }


  createSlides() {
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479926300/about_c3jjq9.png'
    ));
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479926299/animal_udiiiv.png',
    ));
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479926299/contact_y3q4ht.png',
    ));
  }

  imageToZoom(imgUrl: string) {
    this.zoomImgUrl = imgUrl;
  }

}
