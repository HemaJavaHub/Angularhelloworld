import { TestBed, async, inject} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ExpectedConditions } from 'protractor';
import { Router } from '@angular/router';
//import { expressionType } from '@angular/compiler/src/output/output_ast';
import { HomeComponent } from './home/home.component';
import{ Location } from '@angular/common' ;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path:'',component:HomeComponent}
          ]
        )
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  

  it('should render links to Home,Bios,and Create New Bio', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const links = fixture.debugElement.nativeElement.querySelectorAll('a');
    //console.log(compiled.querySelector('nav'));
    expect(links[1].textContent).toEqual('Home');
   expect(links[2].textContent).toEqual('Bio');
   expect(links[3].textContent).toEqual('Creating Bio');
  });
  it('Home link should navigate to Home Component',
    async(inject([Router,Location],(router:Router,location:Location)=>{
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
  //act
  const links = fixture.debugElement.nativeElement.querySelectorAll('a');
  links[1].click();

  fixture.whenStable().then(()=>
  {
    expect(location.path()).toEqual('/');
  })
      
    })));
});
