import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import {PaymentsService} from './payments.service';
import { TableTdMonthComponent } from './table-td-month/table-td-month.component';
import { FormAddPaymentComponent } from './form-add-payment/form-add-payment.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    TableTdMonthComponent,
    FormAddPaymentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
