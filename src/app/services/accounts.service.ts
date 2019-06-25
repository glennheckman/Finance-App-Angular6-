import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../models/Account';
import { ACCOUNTS } from '../data/accounts';


@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  constructor() { }

  getAccounts(params: any): Observable<object> {

    let sortType = params.sortType;
    let order = params.order;
    let limit = params.limit;
    
    let accounts = JSON.parse(JSON.stringify(ACCOUNTS));

    if (sortType == "cash") {
      if (order == "asc") {
        accounts.sort(function (x: Account, y: Account) {
          //@ts-ignore
          return x.available - y.available;
        });
      } else if (order == "desc") {
        accounts.sort(function (x: Account, y: Account) {
          //@ts-ignore
          return y.available - x.available;
        });
      }
    } else if (sortType == "account") {
      if (order == "asc") {
        accounts.sort(function (x: Account, y: Account) {
          //@ts-ignore
          return x.name.split("-")[1] - y.name.split("-")[1];
        });
      } else if (order == "desc") {
        accounts.sort(function (x: Account, y: Account) {
          //@ts-ignore
          return y.name.split("-")[1] - x.name.split("-")[1];
        });
      }
    }

    let results = accounts.splice(0, limit);
    let response = {
      accounts: results,
      remaining: ACCOUNTS.length - results.length
    }

    return of(response);
  }
}