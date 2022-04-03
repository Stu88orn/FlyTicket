import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbusA320Component } from './airbus-a320.component';

describe('AirbusA320Component', () => {
  let component: AirbusA320Component;
  let fixture: ComponentFixture<AirbusA320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirbusA320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirbusA320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
