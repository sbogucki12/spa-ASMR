import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmrRequestsVideo1Component } from './asmr-requests-video1.component';

describe('AsmrRequestsVideo1Component', () => {
  let component: AsmrRequestsVideo1Component;
  let fixture: ComponentFixture<AsmrRequestsVideo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmrRequestsVideo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmrRequestsVideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
