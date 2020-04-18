import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdcPreviewComponent } from './vdc-preview.component';

describe('VdcPreviewComponent', () => {
  let component: VdcPreviewComponent;
  let fixture: ComponentFixture<VdcPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdcPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdcPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
