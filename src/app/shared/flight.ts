import { Itinerary } from "./itinerary";

export class Flight {

    flightId: number=0;
    flightName: string='';
    itineraries: Itinerary[];
    depAirport: string='';
    depDate: Date = new Date;
    depTime: string='';
    arrAirport: string='';
    arrDate: Date = new Date;
    arrTime: string='';

}
