import {Component, OnInit} from '@angular/core';
import {MatAnchor} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {NgForOf} from '@angular/common';
import {CampaignCardComponent} from '../../components/campaign-card/campaign-card.component';
import {Campaign} from '../../models/campaign.model';
import {RecidarService} from '../../../shared/services/recidar.service';

@Component({
  selector: 'app-home',
  imports: [
    MatAnchor,
    TranslatePipe,
    MatGridList,
    MatGridTile,
    NgForOf,
    CampaignCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  campaigns: Campaign[]=[] ;

  constructor(private recidarService: RecidarService) {}

  ngOnInit(): void {
    this.recidarService.getCampaigns().subscribe((data: Campaign[]) => {
      this.campaigns = data;
    });
  }

}
