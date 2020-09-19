import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoPart05Component } from './customer-info-part05.component';

describe('CustomerInfoPart05Component', () => {
  let component: CustomerInfoPart05Component;
  let fixture: ComponentFixture<CustomerInfoPart05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoPart05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoPart05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
