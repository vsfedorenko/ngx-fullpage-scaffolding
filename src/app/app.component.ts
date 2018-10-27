import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MnFullpageOptions} from "ngx-fullpage";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() public options: MnFullpageOptions = MnFullpageOptions.create({
    controlArrows: false,
    scrollingSpeed: 1000,
    css3: true,
  });

}
