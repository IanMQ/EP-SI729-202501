import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {enviroment} from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RecidarService {
  private apiUrl = enviroment.api;

  constructor(private http: HttpClient) { }

  getCampaigns() {
    return this.http.get<any>(this.apiUrl + 'campaigns');
  }

  getDonors() {
    return this.http.get<any>(this.apiUrl + 'donors');
  }

  getDonations() {
    return this.http.get<any>(this.apiUrl + 'donations');
  }

  getDonationsByCampaignId(campaignId: string) {
    return this.http.get<any>(`${this.apiUrl}donations?campaignId=${campaignId}`);
  }

  createDonation(donation: any) {
    return this.http.post<any>(this.apiUrl + 'donations', donation);
  }

  authenticateDonorbyId(donorId: string) {
    return this.http.get<any>(`${this.apiUrl}donors/${donorId}`);
  }

}
