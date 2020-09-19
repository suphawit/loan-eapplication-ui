import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorBusinessOwnerComponent } from './guarantor-business-owner.component';

describe('GuarantorBusinessOwnerComponent', () => {
  let component: GuarantorBusinessOwnerComponent;
  let fixture: ComponentFixture<GuarantorBusinessOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarantorBusinessOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarantorBusinessOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
