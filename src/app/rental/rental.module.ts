import { NgModule } from '@angular/core';
//CommonModule  FOR ngFor DIRECTIVES
import { CommonModule } from '@angular/common';
/*
- html side - 
ngfor is an angular directives and rentals is the array alrady crated in our ts file
in each iteration we assign current value of the array rentals to the rental variable 
 
          <div class='col-md-3 col-xs-6' *ngfor="let rntal of rentals">
            <bwm-rental-list-item></bwm-rental-list-item>
          </div>
*/

//FOR NEW COMPONENT
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

//IMPORT SERVICE from shared folder
import { RentalService } from './shared/rental.service';

//import { Rental } from './shared/rental.model';

//IMPORT ROUTE FOR REGISTER NEW ROUTE IN THIS COMPONENT
import { Routes, RouterModule } from '@angular/router';

//ROUTING
const routes: Routes = [
    {path: 'rentals', 
        component: RentalComponent,
        children: [
            { path: '', component: RentalListComponent },
            { path: ':rentalID', component: RentalDetailComponent }
        ]
    }
  ]
  



//DECORATOR
@NgModule ({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
        RentalDetailComponent
    ],
    imports: [
        //IMPORT CommonModule  FOR ngFor DIRECTIVES
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        //IMPORT SERVICE from shared folder
        RentalService
    ]
})

export class RentalModule {}