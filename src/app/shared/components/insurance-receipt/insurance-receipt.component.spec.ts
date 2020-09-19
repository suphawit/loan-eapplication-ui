import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceReceiptComponent } from './insurance-receipt.component';

describe('InsuranceReceiptComponent', () => {
  let component: InsuranceReceiptComponent;
  let fixture: ComponentFixture<InsuranceReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
