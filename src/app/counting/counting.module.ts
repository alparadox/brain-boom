import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import { CountComponent } from './count/count.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'count', component: CountComponent }
]

@NgModule({
  declarations: [
    MainPageComponent,
    CountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CountingModule { }
