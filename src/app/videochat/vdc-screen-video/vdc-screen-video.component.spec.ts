import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdcScreenVideoComponent } from './vdc-screen-video.component';

describe('VdcScreenVideoComponent', () => {
  let component: VdcScreenVideoComponent;
  let fixture: ComponentFixture<VdcScreenVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdcScreenVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdcScreenVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
