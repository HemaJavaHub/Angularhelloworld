import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioComponent } from './bio.component';
import { DeveloperService } from '../developer.service';

import{ of } from 'rxjs/internal/observable/of';
import { Developer } from '../developer';
import { AppModule } from '../app.module';

describe('BioComponent', () => {
  let component: BioComponent;
  let fixture: ComponentFixture<BioComponent>;
  let fakeDevelopers= [ 
    new Developer(1,"J","Money","C#",2007),
    new Developer(2,"Jon","Bon Jovi","C++",1980)
      ]
    const developerServiceSpy = jasmine.createSpyObj('DeveloperService' , ['getDevelopers'])
    const getDevelopersSpy = developerServiceSpy.getDevelopers.and.returnValue(of(fakeDevelopers))

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      //declarations: [ BioComponent ],
      providers:[
        {
          provide:DeveloperService, useValue :developerServiceSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
