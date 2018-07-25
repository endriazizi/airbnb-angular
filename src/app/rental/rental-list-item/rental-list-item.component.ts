import { Component, OnInit } from '@angular/core';
//IMPORT DATA MODEL
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'bwm-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


