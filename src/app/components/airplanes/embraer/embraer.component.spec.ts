import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbraerComponent } from './embraer.component';

describe('EmbraerComponent', () => {
  let component: EmbraerComponent;
  let fixture: ComponentFixture<EmbraerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbraerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbraerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
