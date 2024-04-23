import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatPumpComponent } from './heat-pump.component';

describe('HeatPumpComponent', () => {
  let component: HeatPumpComponent;
  let fixture: ComponentFixture<HeatPumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeatPumpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeatPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
