/* tslint:disable:no-trailing-whitespace typedef */
import { Component } from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss']
})
export class LightsComponent {

  constructor(private themeService: NbThemeService) {
    this.themeService.changeTheme('default');
  }

}
