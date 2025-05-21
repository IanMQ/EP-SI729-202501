import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-language-selector',
  imports: [
    MatButton,
    MatButtonToggleGroup,
    MatButtonToggle,
    NgForOf
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  currentLanguage: string = 'en';
  languages: string[] = ['en', 'es'];

  constructor(private translateService: TranslateService) {
    this.currentLanguage = this.translateService.currentLang;
  }

  useLanguage(language: string): void {
    this.translateService.use(language);
  }
}
