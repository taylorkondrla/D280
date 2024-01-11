import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  // Object to store country data
  country: any = {};


  constructor (private apiService: ApiService) {}
  // Method triggered on click to set country data
  setCountryData(event: any) {
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => {
      // Assigning country data and name to the country object
      this.country = {
        ...data,
        country: event.target.getAttribute('name')
      }
    })
  }

}
