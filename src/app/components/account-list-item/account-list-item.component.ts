import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-account-list-item',
  templateUrl: './account-list-item.component.html',
  styleUrls: ['./account-list-item.component.scss']
})

export class AccountListItemComponent {

  @Input() account: Object;

  constructor() { }
}