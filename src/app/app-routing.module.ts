import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemoPageComponent} from './demo-page/demo-page.component';

const routes: Routes = [
  {
    path: '',
    component: DemoPageComponent,
    children: [
      { path: '', redirectTo: 'demo-page', pathMatch: 'full' },
      { path: 'demo-page', component: DemoPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
