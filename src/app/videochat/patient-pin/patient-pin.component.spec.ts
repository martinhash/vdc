import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPinComponent } from './patient-pin.component';

describe('PatientPinComponent', () => {
  let component: PatientPinComponent;
  let fixture: ComponentFixture<PatientPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
