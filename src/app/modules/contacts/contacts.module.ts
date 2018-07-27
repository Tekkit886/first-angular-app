import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from '../../contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactsModule],
  exports: [ContactsModule]
})
export class ContactsModule { }
