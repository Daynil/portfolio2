import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'app-this-app',
  templateUrl: './this-app.component.html',
  styleUrls: ['./this-app.component.scss']
})
export class ThisAppComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }
}
