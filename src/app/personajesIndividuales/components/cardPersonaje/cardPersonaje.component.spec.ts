/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardPersonajeComponent } from './cardPersonaje.component';

describe('CardPersonajeComponent', () => {
  let component: CardPersonajeComponent;
  let fixture: ComponentFixture<CardPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
