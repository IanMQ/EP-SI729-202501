import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './shared/components/header/header.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recidar';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('es');
  }
}
