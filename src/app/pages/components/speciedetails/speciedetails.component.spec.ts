import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciedetailsComponent } from './speciedetails.component';

describe('SpeciedetailsComponent', () => {
  let component: SpeciedetailsComponent;
  let fixture: ComponentFixture<SpeciedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
