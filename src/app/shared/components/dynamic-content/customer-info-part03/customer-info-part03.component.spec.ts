import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoPart03Component } from './customer-info-part03.component';

describe('CustomerInfoPart03Component', () => {
  let component: CustomerInfoPart03Component;
  let fixture: ComponentFixture<CustomerInfoPart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoPart03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoPart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
