import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcbComponent } from './ncb.component';

describe('NcbComponent', () => {
  let component: NcbComponent;
  let fixture: ComponentFixture<NcbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
