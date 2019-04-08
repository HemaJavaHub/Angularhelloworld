import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }  from '@angular/forms';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HoldingListComponent } from './holding-list/holding-list.component';
import { BioDetailsComponent } from './bio-details/bio-details.component' ;

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    HomeComponent,
    FirstComponentComponent,
    HoldingListComponent,
    BioDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

