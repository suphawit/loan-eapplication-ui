import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorLivingConditionComponent } from './guarantor-living-condition.component';

describe('GuarantorLivingConditionComponent', () => {
  let component: GuarantorLivingConditionComponent;
  let fixture: ComponentFixture<GuarantorLivingConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarantorLivingConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarantorLivingConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
