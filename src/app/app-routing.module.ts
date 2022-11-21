import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  { path: 'count',
    loadChildren: () => import('./counting/counting.module').then(m => m.CountingModule) },
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
