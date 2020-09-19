import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingConditionComponent } from './living-condition.component';

describe('LivingConditionComponent', () => {
  let component: LivingConditionComponent;
  let fixture: ComponentFixture<LivingConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
