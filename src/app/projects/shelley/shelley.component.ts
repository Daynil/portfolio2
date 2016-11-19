import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'app-shelley',
  templateUrl: './shelley.component.html',
  styleUrls: ['./shelley.component.scss']
})
export class ShelleyComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}
