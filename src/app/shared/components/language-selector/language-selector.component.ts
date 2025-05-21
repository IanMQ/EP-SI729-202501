import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {NgForOf} from '@angular/common';


/**
 * @summary Componente para gestionar la selección de idioma en la aplicación.
 * Permite a los usuarios cambiar entre los idiomas disponibles utilizando un grupo de botones de alternancia (toggle buttons).
 * Actualiza dinámicamente el idioma de la aplicación mediante el servicio de traducción (`TranslateService` de `ngx-translate`).
 * @author Ian MQ
 */
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
