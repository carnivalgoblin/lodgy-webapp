import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerFabComponent } from './add-beer-fab.component';

describe('AddBeerFabComponent', () => {
  let component: AddBeerFabComponent;
  let fixture: ComponentFixture<AddBeerFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBeerFabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBeerFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
