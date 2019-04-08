import { Injectable } from '@angular/core';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  devs:Developer[];

  constructor() {

    this.devs = [
      new Developer(1,"Suneetha","Atla","Java",2009),
      new Developer(2,"Hema","Joshi","Python",2008),
      new Developer(3,"Jason","Monrez","c",2007),
      new Developer(4,"Priya","Kota","JavaEE",2006)
       ]
   }

   getDevelopers():Developer[]{
     return this.devs;
   }

   getDeveloperById(id:number):Developer{
     return this.devs.find(dev =>dev.id == id);
   }
}
