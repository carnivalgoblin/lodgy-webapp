import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpenseModalComponent } from './update-expense-modal.component';

describe('UpdateExpenseModalComponent', () => {
  let component: UpdateExpenseModalComponent;
  let fixture: ComponentFixture<UpdateExpenseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateExpenseModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateExpenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
