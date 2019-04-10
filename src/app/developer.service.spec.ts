import { TestBed, getTestBed } from '@angular/core/testing';

import { DeveloperService } from './developer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/Testing';
import { url } from 'inspector';
//import { Developer } from './developer';

describe('DeveloperService', () => {
  let injector :TestBed;
  let service: DeveloperService;
  let httpMock : HttpTestingController;
  let url = "http://54.202.108.54/Home/Developers";



  beforeEach(() => { TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [DeveloperService]
  });
  injector = getTestBed();
  service = injector.get(DeveloperService);
  httpMock = injector.get(HttpTestingController);
  
});

  it('should be created', () => {
    //const service: DeveloperService = TestBed.get(DeveloperService);
    expect(service).toBeTruthy();
  });

  it('should make a GET call to API', ()=>{

    let devs;
    service.getDevelopers().subscribe(
    response=>devs=response
    );
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");


    });

});
