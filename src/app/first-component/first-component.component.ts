import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  myColor:string ='yellow';


  heroes = ['Amithab', 'Sharukh', 'Kamal', 'Hruthick'];



  constructor() { }

  changeColorOfHeros(){
    this.myColor = 'red'
;  }

  ngOnInit() {
  }

}
