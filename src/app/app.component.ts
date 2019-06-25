import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { Account } from './models/Account';

@Component({
  selector: 'fin-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {

  constructor(private AccountsService: AccountsService){ }

  accountList:Account[];
  currentOrder:String = "asc";
  currentSortType:String = "cash";
  loadMoreIncrement:number = 99;
  initRecordRequestCount:Number = 3;
  recordsRemaining:Number;

  ngOnInit(){
    this.getAccounts({
      sortType:this.currentSortType, 
      order:this.currentOrder,      
      limit:this.initRecordRequestCount
    });
  }

  getAccounts = (params:any):void => {
    if(!params.limit){
      params.limit = this.initRecordRequestCount;
    }

    this.AccountsService.getAccounts(params)
      .subscribe((response) => {
        this.accountList = response.accounts;
        this.currentSortType = params.sortType;
        this.currentOrder = params.order;
        this.initRecordRequestCount = params.limit;
        this.recordsRemaining = response.remaining;
      });
  }

  loadMoreAccounts = ():void => {
    this.getAccounts({
      sortType:this.currentSortType,
      order:this.currentOrder,
      limit:this.accountList.length + this.loadMoreIncrement
    });
  }
}
