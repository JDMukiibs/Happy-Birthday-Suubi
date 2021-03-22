/* tslint:disable:no-trailing-whitespace typedef */
import { Component } from '@angular/core';
import { trigger, transition, state, animate } from '@angular/animations';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss'],
  animations: [
    trigger('showBulbs', [
      // ...

    ])
  ]
})
export class LightsComponent {

  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('default');
  }

}
