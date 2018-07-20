import { Component, OnInit } from '@angular/core';
//IMPORT DATA MODEL
import { Rental } from '../shared/rental.model';

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
