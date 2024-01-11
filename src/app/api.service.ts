import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // Fetch country data from the World Bank API
  fetchCountryData(countryID: string) {
    let api = `https://api.worldbank.org/v2/country/${countryID}?format=JSON`

    return this.http.get(api)
  }
  // Set country data using a Subject
  setCountryData(countryID: string) {
    let subject = new Subject();

    this.fetchCountryData(countryID).subscribe((data: any) => {
      // Extract relevant data and notify subscribers
      subject.next({
        capital: data[1][0].capitalCity,
        incomeLevel: data[1][0].incomeLevel.value,
        region: data[1][0].region.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      })
    })
    return subject.asObservable();    
  }
}

