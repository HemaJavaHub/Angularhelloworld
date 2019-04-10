import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer'
import { DeveloperService } from '../developer.service';
@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {


    devs:Developer[];



  //making singleton
  constructor(private developerService:DeveloperService) { 


  }
   


showDeveloper(){
  this.developerService.getDevelopers().subscribe(response=>this.devs=response);
  
    //this.developer = new Developer("Suneetha","Atla","Java",2009);
  

}

  ngOnInit() {
     this.showDeveloper();
  }

}
