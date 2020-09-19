import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoPart01Component } from './customer-info-part01.component';

describe('CustomerInfoPart01Component', () => {
  let component: CustomerInfoPart01Component;
  let fixture: ComponentFixture<CustomerInfoPart01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoPart01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoPart01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
