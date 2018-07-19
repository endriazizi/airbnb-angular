
import { NgModule } from '@angular/core';

//FOR NEW COMPONENT
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';



//DECORATOR
@NgModule ({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent
    ],
    imports: []
})

export class RentalModule {}