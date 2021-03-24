import { Component } from '@angular/core';
import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-balloons',
  templateUrl: './balloons.component.html',
  styleUrls: ['./balloons.component.scss'],
  animations: [
    trigger('flyInOut', [
      // Animations for balloons
      state('true', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        query('div', [
          style({ transform: 'translateX(-100%)' }),
          stagger(-30, [animate('4s ease-in'), style({transform: 'none' })])
        ])
      ])
    ])
  ]
})
export class BalloonsComponent {
  freeBalloons = true;
}
