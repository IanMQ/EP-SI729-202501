import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RecidarService} from '../../../shared/services/recidar.service';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgForOf, NgIf} from '@angular/common';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatButton} from '@angular/material/button';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-donate',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    NgForOf,
    MatInput,
    MatButton,
    NgIf,
    TranslatePipe
  ],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit {
  campaigns: any[] = [];
  acceptedItems: string[] = [];
  donation = {
    donorId: '',
    campaignId: null,
    item: '',
    quantity: 1,
    condition: 'New'
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private recidarService: RecidarService,private translate: TranslateService) {}

  ngOnInit(): void {
    this.recidarService.getCampaigns().subscribe((data: any[]) => {
      this.campaigns = data;
    });
  }

  onCampaignChange(event: any): void {
    const selectedCampaign = this.campaigns.find(c => c.id === event.value);
    this.acceptedItems = selectedCampaign ? selectedCampaign.targetItems : [];
  }



  registerDonation(): void {
    this.recidarService.authenticateDonorbyId(this.donation.donorId).subscribe({
      next: (donor) => {
        console.log('Donor autenticado:', donor);
        this.recidarService.createDonation(this.donation).subscribe({
          next: (response) => {
            console.log('Donación registrada exitosamente:', response);
            this.successMessage = this.translate.instant('Donate.success'); // Traducción correcta
            this.errorMessage = ''; // Limpia el mensaje de error si todo es exitoso
          },
          error: (err) => {
            console.error('Error al registrar la donación:', err);
            this.errorMessage = this.translate.instant('Donate.errorDonor'); // Traducción correcta
          }
        });
      },
      error: (err) => {
        if (err.status === 404) {
          console.error('Donor no encontrado');
          this.errorMessage = this.translate.instant('Donate.errorDonor'); // Traducción correcta
        } else {
          console.error('Error al autenticar el donor:', err);
          this.errorMessage = this.translate.instant('Donate.errorDonor'); // Traducción correcta
        }
      }
    });
  }
}
