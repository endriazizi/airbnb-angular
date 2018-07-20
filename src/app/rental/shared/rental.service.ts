//IMPORT INJECTABLE
import { Injectable } from '@angular/core'

//IMPORT OBSERVABLE
import { Observable } from 'rxjs';
import { observeOn } from '../../../../node_modules/rxjs/operator/observeOn';

import { Rental } from './rental.model';


//DECORATOR
@Injectable()
export class RentalService {
    //before we used model
    //private rentals: any[] = 
    private rentals: Rental[] = 
    [{
        id: "1",
        title: "AZIZI",
        city: "New York",
        street: "Times Sqaure",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "2",
        title: "Central Apartment 2",
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 12,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: "3",
        title: "Central Apartment 3",
        city: "Bratislava",
        street: "Hlavna",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: "4",
        title: "Central Apartment 4",
        city: "Berlin",
        street: "Haupt strasse",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 9,
        description: "Very nice apartment",
        dailyRate: 33,
        shared: true,
        createdAt: "24/12/2017"
    }];

    //METHOD PUBLIC FOR CALL IT FROM OTHER COMPONENTS
   //public getRentals(): any {
    //will return Renal Observable of type Rental[ARRAY]
    public getRentals(): Observable<Rental[]> {
        //INSTANCE OF OBSERVABLE
        //rentalObservable:TYPEof OBSERVABLE
        const rentalObservable:Observable<Rental[]> = new Observable((observer)=>{
        //emit some data simulete oure server CALL CALLING SOME ASYNCOUNUS FUNCTION LIKE setTIMOUT
            //SUBSCRIBE CALLBACK SIMULATION SERVER CALL
            setTimeout(()=>{
                //after 1 s I want to emit some data, to emit rentals array decalared above
                //and we can do it by calling observer
                observer.next(this.rentals);
            }, 1000);

            setTimeout(()=>{
                //after 1 s I want to emit some data, to emit rentals array decalared above
                //and we can do it by calling observer
                observer.error("I AM ERROR");
            }, 2000);

            setTimeout(()=>{
                //after 1 s I want to emit some data, to emit rentals array decalared above
                //and we can do it by calling observer
                observer.complete();
            }, 2000);
        });

        return rentalObservable;
    }
    
}