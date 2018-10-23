import {Component, Input, OnInit} from '@angular/core';
import {Payment} from '../payment';

@Component({
  selector: 'app-form-add-payment',
  templateUrl: './form-add-payment.component.html',
  styleUrls: ['./form-add-payment.component.css']
})
export class FormAddPaymentComponent implements OnInit {

  @Input() addPayment: Function;

  model = new Payment('', 0);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.addPayment(this.model.name, this.model.cost);
  }

  ngOnInit() {
  }

}
