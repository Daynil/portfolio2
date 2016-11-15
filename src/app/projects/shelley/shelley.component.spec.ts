/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShelleyComponent } from './shelley.component';

describe('ShelleyComponent', () => {
  let component: ShelleyComponent;
  let fixture: ComponentFixture<ShelleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
