import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
//FOR NEW COMPONENT
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';



//ROUTING
const routes: Routes = [
  {path: '', component: RentalComponent},
  {path: 'temp', component: TempComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    //FOR NEW COMPONENT
    HeaderComponent,
    RentalComponent,
    TempComponent,
    RentalListComponent,
    RentalListItemComponent
  ],
  imports: [
    //NEW MODULE IMPORT
    RouterModule.forRoot(routes),
  
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
