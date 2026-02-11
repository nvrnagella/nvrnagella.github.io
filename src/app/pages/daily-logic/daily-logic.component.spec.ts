import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLogicComponent } from './daily-logic.component';

describe('DailyLogicComponent', () => {
  let component: DailyLogicComponent;
  let fixture: ComponentFixture<DailyLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyLogicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
