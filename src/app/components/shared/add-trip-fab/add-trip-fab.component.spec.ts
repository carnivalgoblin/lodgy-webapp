import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripFabComponent } from './add-trip-fab.component';

describe('AddTripFabComponent', () => {
  let component: AddTripFabComponent;
  let fixture: ComponentFixture<AddTripFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTripFabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTripFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
