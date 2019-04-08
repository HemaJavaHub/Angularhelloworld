import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holding-list',
  templateUrl: './holding-list.component.html',
  styleUrls: ['./holding-list.component.css']
})
export class HoldingListComponent implements OnInit {
  value =0;

  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.value++;

  }
  decrement(){
    this.value--;

  }

}
