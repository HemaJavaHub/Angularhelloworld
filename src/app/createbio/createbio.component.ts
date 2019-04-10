import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
//import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createbio',
  templateUrl: './createbio.component.html',
  styleUrls: ['./createbio.component.css']
})
export class CreatebioComponent implements OnInit {
  devForm=this.fb.group({
    'firstName': new FormControl('',[Validators.required]),
    'lastName': new FormControl('',[Validators.required]),
    'favoriteLanguage': new FormControl('',[Validators.required]),
    'yearStarted': new FormControl('',[Validators.required]),

  });

  get firstName(){return this.devForm.get('firstName').value}
  get lastName(){return this.devForm.get('lastName').value}
  get favoriteLanguage(){return this.devForm.get('favoriteLanguage').value}
  get yearStarted(){return this.devForm.get('yearStarted').value}

  constructor(private fb:FormBuilder, private developerService:DeveloperService,
    private router: Router) { }

    prepareSave():FormData{
      let formData = new FormData();
      formData.append('firstName',this.firstName);
      formData.append('lastName',this.lastName);
      formData.append('favoriteLanguage',this.favoriteLanguage);
      formData.append('yearStarted',this.yearStarted);
      return formData;


    }

    saveDeveloper():void{
      let formData = this.prepareSave();
      this.developerService.addDeveloper(formData);
      this.router.navigate(['/bio']);

    }

  ngOnInit() {
  }

}
