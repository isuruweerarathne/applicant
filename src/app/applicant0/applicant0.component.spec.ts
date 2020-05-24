import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Applicant0Component } from './applicant0.component';

describe('Applicant0Component', () => {
  let component: Applicant0Component;
  let fixture: ComponentFixture<Applicant0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Applicant0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Applicant0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
