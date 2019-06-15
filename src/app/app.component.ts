import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoyalunibrewProject';
  constructor(private location: Location, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
