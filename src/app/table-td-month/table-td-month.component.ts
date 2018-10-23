import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-td-month',
  templateUrl: './table-td-month.component.html',
  styleUrls: ['./table-td-month.component.css']
})
export class TableTdMonthComponent implements OnInit, OnDestroy {

  @Input() cost: string;
  @Input() checked: boolean;
  @Input() updateCost: Function;

  constructor() { }

  onChange() {
    this.checked = !this.checked;
    this.updateCost(this.checked ? this.cost : -this.cost);
  }
  ngOnInit() {
    this.updateCost(this.checked ? this.cost : 0);
  }
  ngOnDestroy() {
    this.updateCost(this.checked ? -this.cost : 0);
  }

}
