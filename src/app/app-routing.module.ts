import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ComboComponent } from './combo/combo.component';

const routes: Routes = [
	{
		path: '',
		component: EditorComponent
	},
	{
		path: 'combo',
		component: ComboComponent
	},
	{ path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
