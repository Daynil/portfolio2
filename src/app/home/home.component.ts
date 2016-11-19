import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundLoading = false;

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
    this.loadBackground();
  }

  loadBackground() {
    this.backgroundLoading = true;
    let bg = new Image();
    bg.onload = () => {
      this.backgroundLoading = false;
    };
    bg.src = 'http://res.cloudinary.com/dz9rf4hwz/image/upload/v1468707880/woVRMu1_btq6hj.jpg';
  }

  bgClasses() {
    return {
      'bg-transition': !this.backgroundLoading,
      'bg-image': !this.backgroundLoading
    };
  }

}
