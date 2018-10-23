import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPaymentComponent } from './form-add-payment.component';

describe('FormAddPaymentComponent', () => {
  let component: FormAddPaymentComponent;
  let fixture: ComponentFixture<FormAddPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
