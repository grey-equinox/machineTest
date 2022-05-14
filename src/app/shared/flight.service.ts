import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { Itinerary } from './itinerary';
import { HttpClient } from '@angular/common/http';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[];
  itineraries: Itinerary[];

  formData: Flight = new Flight();

  constructor(private httpClient: HttpClient) { }

    // get all flights or Method for Binding all flights
    getAllFlights(){
      this.httpClient.get(environment.apiUrl+'/api/flightdetails')
        .toPromise().then(response =>
          this.flights= response as Flight[]);
    }

  // get a particular flight
  getFlight(flightID: number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/flights/'+flightID);
  }

 // insert flight
 insertFlight(flight: Flight): Observable<any>{
  return this.httpClient.post(environment.apiUrl+'/api/flights/',flight);
}

// update flight
updateFlight(flight: Flight): Observable<any> {
  return this.httpClient.put(environment.apiUrl+'/api/flights/',flight);
}

// delete flight
deleteFlight(flightID: number): Observable<any>{
  return this.httpClient.delete(environment.apiUrl+'/api/employees/'+flightID);
}

}
