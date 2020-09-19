import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoPart04Component } from './customer-info-part04.component';

describe('CustomerInfoPart04Component', () => {
  let component: CustomerInfoPart04Component;
  let fixture: ComponentFixture<CustomerInfoPart04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoPart04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoPart04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
