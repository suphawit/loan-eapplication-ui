import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoBorrowerCustomerInfoComponent } from './co-borrower-customer-info.component';

describe('CoBorrowerCustomerInfoComponent', () => {
  let component: CoBorrowerCustomerInfoComponent;
  let fixture: ComponentFixture<CoBorrowerCustomerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoBorrowerCustomerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoBorrowerCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
