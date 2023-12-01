import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseFabComponent } from './add-expense-fab.component';

describe('AddExpenseFabComponent', () => {
  let component: AddExpenseFabComponent;
  let fixture: ComponentFixture<AddExpenseFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddExpenseFabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddExpenseFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
