import {Component, Input, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {Campaign} from '../../models/campaign.model';
import {MatAnchor} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {RecidarService} from '../../../shared/services/recidar.service';

/**
 * @summary Componente para mostrar información detallada de una campaña específica en una tarjeta.
 * Incluye datos como nombre, ubicación, fechas y artículos requeridos, además del progreso de donaciones recolectadas frente a la meta establecida por campaña.
 * @author Ian MQ
 */
@Component({
  selector: 'app-campaign-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardFooter,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatAnchor,
    TranslatePipe,

  ],
  templateUrl: './campaign-card.component.html',
  styleUrl: './campaign-card.component.css'
})
export class CampaignCardComponent implements OnInit {
  @Input() campaign!: Campaign;

  donationsNumber: number = 0;

  constructor(private recidarService: RecidarService) {}

  ngOnInit(): void {
    this.recidarService.getDonationsByCampaignId(this.campaign.id).subscribe((donations: any[]) => {
      this.donationsNumber = donations.length;
    });
  }
}
