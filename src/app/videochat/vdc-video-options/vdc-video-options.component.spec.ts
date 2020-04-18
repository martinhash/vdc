import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdcVideoOptionsComponent } from './vdc-video-options.component';

describe('VdcVideoOptionsComponent', () => {
  let component: VdcVideoOptionsComponent;
  let fixture: ComponentFixture<VdcVideoOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdcVideoOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdcVideoOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
