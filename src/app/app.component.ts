/* tslint:disable:no-trailing-whitespace typedef */
import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(3000)
      ])
    ]),
    trigger('fadeIn2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s 2s ease-in')
      ])
    ]),
    trigger('fadeInOut', [
      state('out', style({ opacity: 0 })),
      state('in', style( { opacity: 1 })),
      transition('in => out', [
        animate(3000),
        style({ opacity: 1 }),
      ]),
      transition('* => in', [
        style({ opacity: 0 }),
        animate(3000)
      ])
    ]),
    trigger('lightsOn', [
      // Animations for lights
      state('off', style({ transform: 'translateX(0)' })),
      state('on', style({ transform: 'translateX(-200%)' })),
      transition('* => off', [
        style({ transform: 'translateX(-200%)' }),
        animate('1s ease-in')
      ]),
      transition('off => on', [
        style({ transform: 'translateX(0)' }),
        animate('2s 1s ease-out')
      ])

    ]),
    trigger('balloonsUp', [
      // Animations for balloons
      state('down', style({ transform: 'translateX(0)' })),
      state('up', style({ transform: 'translateX(-200%)' })),
      transition('* => down', [
        style({ transform: 'translateX(-200%)' }),
        animate('1s 2s ease-in')
      ]),
      transition('down => up', [
        style({ transform: 'translateX(0)' }),
        animate('2s 1s ease-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Happy-Birthday-Suubi';
  // Button variables
  lightsAreOn = false;
  balloonsAreHung = false;
  cakePlaced = false;

  // Button functions
  turnOnLights() {
    this.lightsAreOn = !this.lightsAreOn;
  }

  hangBalloons() {
    this.balloonsAreHung = !this.balloonsAreHung;
  }

  placeCake() {
    this.cakePlaced = !this.cakePlaced;
  }
}
