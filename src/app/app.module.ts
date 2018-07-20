import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
//IMPORT NEW COMPONENT
import { HeaderComponent } from './common/header/header.component';
import { TempComponent } from './temp/temp.component';
import { RentalComponent } from './rental/rental.component';

//IMPORT MODULE
import { RentalModule } from './rental/rental.module';


//ROUTING
const routes: Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'},
  {path: 'temp', component: TempComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    //FOR NEW COMPONENT
    HeaderComponent,
    TempComponent
  ],
  imports: [
    //NEW MODULE IMPORT
    RouterModule.forRoot(routes),
    //RENTAL MODULE
    RentalModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
