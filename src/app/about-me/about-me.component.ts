import {
  Component, OnInit
} from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  languages = [];
  frameworks = [];

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
    this.showSkills();
    this.animateSkillbar();
  }

  animateSkillbar() {

  }

  showSkills() {
    this.languages = [
      {
        name: 'HTML',
        amount: 95
      },
      {
        name: 'SASS/CSS',
        amount: 90
      },
      {
        name: 'Javascript',
        amount: 90
      },
      {
        name: 'Typescript',
        amount: 85
      },
      {
        name: 'Java',
        amount: 80
      },
      {
        name: 'Python',
        amount: 60
      },
      {
        name: 'Ruby',
        amount: 30
      }
    ];

    this.frameworks = [
      {
        name: 'Angular 2.x',
        amount: 90
      },
      {
        name: 'React',
        amount: 70
      },
      {
        name: 'jQuery',
        amount: 65
      },
      {
        name: 'Django',
        amount: 20
      }
    ]
  }


}
