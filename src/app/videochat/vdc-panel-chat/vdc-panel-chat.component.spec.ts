import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdcPanelChatComponent } from './vdc-panel-chat.component';

describe('VdcPanelChatComponent', () => {
  let component: VdcPanelChatComponent;
  let fixture: ComponentFixture<VdcPanelChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdcPanelChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdcPanelChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
