import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { ActivatedRoute } from '@angular/router';
import { Developer } from '../developer';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent implements OnInit {
developer:Developer;

  constructor(private activatedRoute: ActivatedRoute ,private developerService:DeveloperService) { }

  getDeveloper(){

    this.developer = this.developerService.getDeveloperById(
     parseInt(this.activatedRoute.snapshot.paramMap.get('id'))
  
    );
  }

  ngOnInit() {
    this.getDeveloper();
  }

}
