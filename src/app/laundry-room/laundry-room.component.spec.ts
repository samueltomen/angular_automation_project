import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundryRoomComponent } from './laundry-room.component';

describe('LaundryRoomComponent', () => {
  let component: LaundryRoomComponent;
  let fixture: ComponentFixture<LaundryRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaundryRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaundryRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
