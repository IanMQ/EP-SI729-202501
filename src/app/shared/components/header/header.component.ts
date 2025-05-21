import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {LanguageSelectorComponent} from '../language-selector/language-selector.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatAnchor,
    LanguageSelectorComponent,
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
