import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanExpectationComponent } from './loan-expectation.component';

describe('LoanExpectationComponent', () => {
  let component: LoanExpectationComponent;
  let fixture: ComponentFixture<LoanExpectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanExpectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanExpectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
