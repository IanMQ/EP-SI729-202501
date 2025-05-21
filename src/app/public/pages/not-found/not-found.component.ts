import { Component } from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {TranslatePipe} from '@ngx-translate/core';

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
