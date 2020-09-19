import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCalComponent } from './pre-cal.component';

describe('PreCalComponent', () => {
  let component: PreCalComponent;
  let fixture: ComponentFixture<PreCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
