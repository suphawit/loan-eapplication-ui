import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoBorrowerLivingConditionComponent } from './co-borrower-living-condition.component';

describe('CoBorrowerLivingConditionComponent', () => {
  let component: CoBorrowerLivingConditionComponent;
  let fixture: ComponentFixture<CoBorrowerLivingConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoBorrowerLivingConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoBorrowerLivingConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
