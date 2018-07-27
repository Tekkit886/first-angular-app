import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SkillsModule } from './modules/skills/skills.module';

import { AppComponent } from './app.component';

import { SkillsService } from './services/skills.service';

import { GreetingComponent } from './greeting/greeting.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,

    GreetingComponent,
    ContactFormComponent,
    ClickMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ContactsModule,
    SkillsModule,
    AppRoutingModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
