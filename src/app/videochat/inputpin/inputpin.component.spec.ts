import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputpinComponent } from './inputpin.component';

describe('InputpinComponent', () => {
  let component: InputpinComponent;
  let fixture: ComponentFixture<InputpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
