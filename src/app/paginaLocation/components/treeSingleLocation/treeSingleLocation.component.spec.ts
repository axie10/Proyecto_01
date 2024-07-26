/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TreeSingleLocationComponent } from './treeSingleLocation.component';

describe('TreeSingleLocationComponent', () => {
  let component: TreeSingleLocationComponent;
  let fixture: ComponentFixture<TreeSingleLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSingleLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSingleLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
