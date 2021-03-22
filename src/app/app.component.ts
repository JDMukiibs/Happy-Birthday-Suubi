/* tslint:disable:no-trailing-whitespace typedef */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Happy-Birthday-Suubi';
  lightsAreOn = false;

  turnOnLights() {
    this.lightsAreOn = !this.lightsAreOn;
  }
}
