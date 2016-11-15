import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'app-ccaw',
  templateUrl: './ccaw.component.html',
  styleUrls: ['./ccaw.component.scss']
})
export class CcawComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}
