import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebioComponent } from './createbio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeveloperService } from '../developer.service';
import { Router } from '@angular/router';

describe('CreatebioComponent', () => {
  let component: CreatebioComponent;
  let fixture: ComponentFixture<CreatebioComponent>;
   const developerServiceSpy = jasmine.createSpyObj('DeveloperService',['getDeveloper'])
   const routerSpy = jasmine.createSpyObj('Router',['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebioComponent ],
      imports : [ReactiveFormsModule],
      providers : [
        {
          provide:DeveloperService , useValue:developerServiceSpy
        },
        {provide:Router,useValue:routerSpy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
