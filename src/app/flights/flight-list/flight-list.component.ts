import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/shared/flight';
import { FlightService } from 'src/app/shared/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

    //declare for seacrh
    filter: string;

    //declare for Pagination
    page: number=1;

  constructor(public flightService: FlightService,
    private router: Router) { }

  ngOnInit(): void {

    this.flightService.getAllFlights();
  }

    //populate flight record
    populateFlightForm(flight: Flight){

      this.flightService.formData=flight;
    }

  //delete employee
  deleteFlight(id: number){
    if(confirm('Are you sure you want to delete this record ?')){
      this.flightService.deleteFlight(id)
      .subscribe(response=>{
        console.log(response)
        this.flightService.getAllFlights();
      }),
      error=>{
        console.log(error);
      }
    }
  }

    //updateEmployee, to transer data from one page to another
    updateFlight(flightID: number){
      console.log(flightID);
      this.router.navigate(['flightupdate',flightID])
  
    }
}
