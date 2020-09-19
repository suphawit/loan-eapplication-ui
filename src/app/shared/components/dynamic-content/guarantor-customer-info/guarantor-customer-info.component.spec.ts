import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorCustomerInfoComponent } from './guarantor-customer-info.component';

describe('GuarantorCustomerInfoComponent', () => {
  let component: GuarantorCustomerInfoComponent;
  let fixture: ComponentFixture<GuarantorCustomerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarantorCustomerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarantorCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
