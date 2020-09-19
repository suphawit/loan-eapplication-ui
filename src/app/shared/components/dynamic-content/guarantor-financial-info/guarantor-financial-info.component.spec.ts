import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorFinancialInfoComponent } from './guarantor-financial-info.component';

describe('GuarantorFinancialInfoComponent', () => {
  let component: GuarantorFinancialInfoComponent;
  let fixture: ComponentFixture<GuarantorFinancialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarantorFinancialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarantorFinancialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
