import { Component, OnInit } from '@angular/core';

//IMPORT SERVICE from shared folder
import { RentalService } from '../shared/rental.service';
//IMPORT DATA MODEL
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

    //CREATE ARRAY types any
    // rentals: any[] = [1,2,3,4];
    //into hmtl side      {{rental}}

    //ARRAY OF OBJECT
    //EMPTY OBJECT
    //RENTAL ARRAY WITHOUT DATA MODEL
    //rentals: any[] = [];
    rentals: Rental[] = [];

    //INJECT SERVICE INSIDE THE CONSTRUCTOR

    //name of the variable to references on our services of the Type rentalService
    //WE HAVE ACCESS TO THE SERVICE rentalService we created via constructor
    constructor(private rentalService: RentalService) { }

    //WE CAN CALL THE SERVICE IN ngOnInit THAT IS A LIFECYCLE METHOD
    //THIS METHOD IS CALL WHEN OUR COMPONENT IS JUST BEFORE TOBE INSTACETED, TO BE CREATED TO THE SCREEN
    ngOnInit() {
      //WE WANT TO ASSIGN RESULT OF THIS METHOD getRentals() to our vaiable rentals ( entals: any[] = [];)
      //this.rentals = this.rentalService.getRentals();
      const rentalObservable = this.rentalService.getRentals();
      //SUBRCRIBE TO OUR OBSERVABLE with 3 functions to get data
      rentalObservable.subscribe(
        // we are not yet reciving any data because we are not emitting data from our rental.service
        //WE ARE PECIFING reentals's TYPE: Rental[])
        (rentals: Rental[]) => {
          this.rentals =rentals

        },
        (err) => {

        },
        () => {

        }
      )
    };

}
