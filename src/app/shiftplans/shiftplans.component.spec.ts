import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftplansComponent } from './shiftplans.component';

describe('ShiftplansComponent', () => {
  let component: ShiftplansComponent;
  let fixture: ComponentFixture<ShiftplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
