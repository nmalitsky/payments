import { Component, OnInit } from '@angular/core';
import {PaymentsService} from '../payments.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  rows;
  columns;

  totalCost = 0;

  constructor(private service: PaymentsService) {
  }

  get addPaymentFunc() {
    return this.addPayment.bind(this);
  }

  addPayment(name, cost) {
    this.rows.push(this.service.addRow(name, cost));
  }

  get deleteRowFunc() {
    return this.deleteRow.bind(this);
  }

  deleteRow(obj) {
    this.rows.splice(this.rows.findIndex(row => row === obj), 1);
  }

  get updateCostFunc() {
    return this.updateCost.bind(this);
  }

  updateCost(cost) {
    this.totalCost += cost;
  }
  ngOnInit() {
    this.columns = this.service.getColumns();
    this.rows = this.service.getRows();
  }

}
