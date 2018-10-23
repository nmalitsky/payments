import { Injectable } from '@angular/core';

@Injectable()
export class PaymentsService {

  getRows() {
    return [
      {
        'Наименование платежа': 'Интернет',
        'Стоимость': 600,
        'Янв': true,
        'Фев': true,
        'Мар': false,
        'Апр': true,
        'Май': false,
        'Июн': false,
        'Июл': false,
        'Авг': false,
        'Сен': false,
        'Окт': false,
        'Ноя': false,
        'Дек': false
      },
      {
        'Наименование платежа': 'Домашний телефон',
        'Стоимость': 500,
        'Янв': true,
        'Фев': true,
        'Мар': false,
        'Апр': true,
        'Май': false,
        'Июн': false,
        'Июл': false,
        'Авг': false,
        'Сен': false,
        'Окт': false,
        'Ноя': false,
        'Дек': false
      },
      {
        'Наименование платежа': 'Мобильный телефон',
        'Стоимость': 300,
        'Янв': true,
        'Фев': true,
        'Мар': false,
        'Апр': true,
        'Май': false,
        'Июн': false,
        'Июл': false,
        'Авг': false,
        'Сен': false,
        'Окт': false,
        'Ноя': false,
        'Дек': false
      }
    ];
  }


  getColumns() {
    return [
      'Наименование платежа', 'Стоимость', 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек', 'Удалить'];
  }

  addRow(name, cost) {
    return {
      'Наименование платежа': name,
      'Стоимость': cost,
      'Янв': false,
      'Фев': false,
      'Мар': false,
      'Апр': false,
      'Май': false,
      'Июн': false,
      'Июл': false,
      'Авг': false,
      'Сен': false,
      'Окт': false,
      'Ноя': false,
      'Дек': false
    }
  }
}
