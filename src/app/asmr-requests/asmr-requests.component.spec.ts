import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmrRequestsComponent } from './asmr-requests.component';

describe('AsmrRequestsComponent', () => {
  let component: AsmrRequestsComponent;
  let fixture: ComponentFixture<AsmrRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmrRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmrRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
