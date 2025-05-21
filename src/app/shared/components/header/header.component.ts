import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {LanguageSelectorComponent} from '../language-selector/language-selector.component';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * @summary Componente para mostrar el encabezado de la aplicación.
 * Incluye enlaces de navegación y un selector de idioma para mejorar la experiencia del usuario en la interfaz principal de la aplicación.
 * Utiliza el pipe de traducción para mostrar los textos en el idioma seleccionado por el usuario dinámicamente.
 * @author Ian MQ
 */
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
