import { Component } from '@angular/core';

import * as confetti from 'canvas-confetti';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('out', style({ opacity: 0 })),
      state('in', style( { opacity: 1 })),
      transition('in => out', [
        animate('3s ease-out'),
        style({ opacity: 1 }),
      ]),
      transition('* => in', [
        style({ opacity: 0 }),
        animate('3s ease-in')
      ])
    ])
  ]
})
export class ConfettiComponent {
  count = 200;
  confettiThrown = false;
  myCanvas = document.getElementById('myCanvas');

  // tslint:disable-next-line:typedef
  throwConfetti() {
    this.confettiThrown = true;
    confetti.create(this.myCanvas, {resize: true})({
      shapes: ['square'],
      particleCount: Math.floor(this.count * 0.25),
      spread: 26,
      origin: { y: 0.5, x: 0.5 },
      startVelocity: 55
    });
    confetti.create(this.myCanvas, {resize: true})({
      shapes: ['square'],
      particleCount: Math.floor(this.count * 0.2),
      spread: 60,
      origin: { y: 0.5, x: 0.5 }
    });
    confetti.create(this.myCanvas, {resize: true})({
      shapes: ['square'],
      particleCount: Math.floor(this.count * 0.35),
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      origin: { y: 0.5, x: 0.5 },
      startVelocity: 55
    });
    confetti.create(this.myCanvas, {resize: true})({
      shapes: ['square'],
      particleCount: Math.floor(this.count * 0.1),
      spread: 120,
      origin: { y: 0.5, x: 0.5 },
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    confetti.create(this.myCanvas, {resize: true})({
      shapes: ['square'],
      particleCount: Math.floor(this.count * 0.1),
      spread: 120,
      origin: { y: 0.5, x: 0.5 },
      startVelocity: 45
    });
  }

}
