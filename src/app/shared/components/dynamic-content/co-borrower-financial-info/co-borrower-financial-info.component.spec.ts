import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoBorrowerFinancialInfoComponent } from './co-borrower-financial-info.component';

describe('CoBorrowerFinancialInfoComponent', () => {
  let component: CoBorrowerFinancialInfoComponent;
  let fixture: ComponentFixture<CoBorrowerFinancialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoBorrowerFinancialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoBorrowerFinancialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
