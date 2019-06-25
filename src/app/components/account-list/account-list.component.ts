import { Component, Input } from '@angular/core';
import { Account } from '../../models/Account';

@Component({
  selector: 'fin-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})

export class AccountListComponent{

  @Input() accountList:Account[];

  constructor() {
    console.log(this.accountList);   
  }
}