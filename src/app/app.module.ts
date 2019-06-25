import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountListActionButtonComponent } from './components/account-list-action-button/account-list-action-button.component';
import { AccountListItemComponent } from './components/account-list-item/account-list-item.component';
import { AccountListHeaderComponent } from './components/account-list-header/account-list-header.component';
import { ConvertToSymbolPipe } from './filters/convert-to-symbol.pipe';
import { AccountsService } from './services/accounts.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule 
  ],
  declarations: [ 
    AppComponent, 
    AccountListComponent, 
    AccountListActionButtonComponent,
    AccountListItemComponent,
    AccountListHeaderComponent,
    ConvertToSymbolPipe
  ],
  bootstrap: [ 
    AppComponent
  ],
  providers: [
    AccountsService
  ]
})
export class AppModule { }
