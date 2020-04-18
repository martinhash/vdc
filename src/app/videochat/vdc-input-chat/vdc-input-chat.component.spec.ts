import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdcInputChatComponent } from './vdc-input-chat.component';

describe('VdcInputChatComponent', () => {
  let component: VdcInputChatComponent;
  let fixture: ComponentFixture<VdcInputChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdcInputChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdcInputChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
