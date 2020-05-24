import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Applicant1Component } from './applicant1.component';

describe('Applicant1Component', () => {
  let component: Applicant1Component;
  let fixture: ComponentFixture<Applicant1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Applicant1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Applicant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
