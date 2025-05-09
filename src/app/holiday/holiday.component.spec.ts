import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayComponent } from './holiday.component';

describe('HolidayComponent', () => {
  let component: HolidayComponent;
  let fixture: ComponentFixture<HolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
