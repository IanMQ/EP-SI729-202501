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
