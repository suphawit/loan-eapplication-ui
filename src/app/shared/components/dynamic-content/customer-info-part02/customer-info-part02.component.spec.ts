import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoPart02Component } from './customer-info-part02.component';

describe('CustomerInfoPart02Component', () => {
  let component: CustomerInfoPart02Component;
  let fixture: ComponentFixture<CustomerInfoPart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoPart02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoPart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
