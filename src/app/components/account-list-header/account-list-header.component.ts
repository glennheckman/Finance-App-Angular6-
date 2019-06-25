import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fin-account-list-header',
  templateUrl: './account-list-header.component.html',
  styleUrls: ['./account-list-header.component.scss']
})

export class AccountListHeaderComponent implements OnInit{

  @Output() getAccounts: EventEmitter<any> = new EventEmitter();
  @Input() sortType: String;
  @Input() sortAscOrder: String;

  currentSort:String;
  sortAccountAsc: Boolean;
  sortCashAsc: Boolean;

  ngOnInit(){
    this.currentSort = this.sortType;
    if (this.sortAscOrder === "asc") {
      this.sortAccountAsc = this.sortCashAsc = true;
    } else {
      this.sortAccountAsc = this.sortCashAsc = false;
    }
  }

  sortAccount = () => {
    this.currentSort = 'account';
    this.sortAccountAsc = !this.sortAccountAsc;
    this.getAccounts.emit({
      sortType: this.currentSort,
      order: this.sortAccountAsc ? 'asc' : 'desc',
      limit: null
    });
  }

  sortCash = () => {
    this.currentSort = 'cash';
    this.sortCashAsc = !this.sortCashAsc;
    this.getAccounts.emit({
      sortType: this.currentSort,
      order: this.sortCashAsc ? 'asc' : 'desc',
      limit: null
    });
  }
}