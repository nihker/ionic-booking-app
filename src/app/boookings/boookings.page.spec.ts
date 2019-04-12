import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoookingsPage } from './boookings.page';

describe('BoookingsPage', () => {
  let component: BoookingsPage;
  let fixture: ComponentFixture<BoookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
