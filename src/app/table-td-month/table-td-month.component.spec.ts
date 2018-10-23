import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTdMonthComponent } from './table-td-month.component';

describe('TableTdMonthComponent', () => {
  let component: TableTdMonthComponent;
  let fixture: ComponentFixture<TableTdMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTdMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTdMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
