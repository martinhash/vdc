import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdcHomeRoomComponent } from './vdc-home-room.component';

describe('VdcHomeRoomComponent', () => {
  let component: VdcHomeRoomComponent;
  let fixture: ComponentFixture<VdcHomeRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdcHomeRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdcHomeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
