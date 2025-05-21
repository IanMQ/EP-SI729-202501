import { Component } from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {TranslatePipe} from '@ngx-translate/core';

/**
 * @summary Componente para mostrar una página de error 404 cuando la ruta solicitada no existe.
 * Incluye un enlace para redirigir al usuario de vuelta a la página de inicio de la aplicación utilizando el router de Angular.
 * Utiliza el pipe de traducción para mostrar los textos en el idioma seleccionado por el usuario dinámicamente.
 * @author Ian MQ
 */
@Component({
  selector: 'app-not-found',
  imports: [
    MatAnchor,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
