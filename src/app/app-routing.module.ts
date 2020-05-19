import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GuesserComponent} from './guesser/guesser.component';


const routes: Routes = [
  {path: '', component: GuesserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
