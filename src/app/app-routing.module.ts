import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { SkillsComponent } from './skills/skills.component';
import { GreetingComponent } from './greeting/greeting.component';

const routes: Routes = [
	{
		path: 'contact',
		component: ContactFormComponent
	},
	{
		path: 'skills',
		component: SkillsComponent
	},
	{
		path: 'greeting',
		component: GreetingComponent
	},
	{
		path: '',
		redirectTo: '/greeting',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
