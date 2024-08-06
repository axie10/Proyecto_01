/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tabla-1Component } from './tabla-1.component';

describe('Tabla-1Component', () => {
  let component: Tabla-1Component;
  let fixture: ComponentFixture<Tabla-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tabla-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabla-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
