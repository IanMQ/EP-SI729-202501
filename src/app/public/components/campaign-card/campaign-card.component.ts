import { Component,Input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {Campaign} from '../../models/campaign.model';

@Component({
  selector: 'app-campaign-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardFooter,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,

  ],
  templateUrl: './campaign-card.component.html',
  styleUrl: './campaign-card.component.css'
})
export class CampaignCardComponent {
  @Input() campaign!: Campaign; // Recibe un objeto Campaign

}
