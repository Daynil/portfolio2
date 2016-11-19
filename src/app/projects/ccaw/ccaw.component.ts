import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';
import { Slide } from '../../shared/carousel/carousel.component';

@Component({
  selector: 'app-ccaw',
  templateUrl: './ccaw.component.html',
  styleUrls: ['./ccaw.component.scss']
})
export class CcawComponent implements OnInit {
  interval = 5000;
  slides: Slide[] = [];

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
    this.createSlides();
  }

  createSlides() {
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479495793/speakers_fki5n1.png'
    ));
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479495791/calendar_crs1ue.png',
    ));
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479495791/home_jvldol.png',
    ));
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479495792/speaker_zkx5d2.png',
    ));
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479495792/uploads_eylwkg.png',
    ));
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1479495791/dashboard_cqqbpj.png',
    ));
    this.slides.push(new Slide(
      'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1472415953/cassiesign_m3cwbd.jpg',
    ));
  }
}
