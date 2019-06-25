import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fin-account-list-action-button',
  templateUrl: './account-list-action-button.component.html',
  styleUrls: ['./account-list-action-button.component.scss']
})
export class AccountListActionButtonComponent {

  @Input() title: String;
  @Output() requestMore: EventEmitter<any> = new EventEmitter();

  constructor() { }

  loadMore = ():void => {
    this.requestMore.emit();
  }
}
