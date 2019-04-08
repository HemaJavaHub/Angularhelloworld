import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HoldingListComponent } from './holding-list/holding-list.component';
import { BioDetailsComponent } from './bio-details/bio-details.component';

const routes: Routes = [ 
  { path: '' ,component:HomeComponent},
  {path: 'bio', component:BioComponent},
  {path: 'firstComponent', component:FirstComponentComponent},
  { path: 'value', component:HoldingListComponent},
  { path: 'bio/:id', component:BioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
