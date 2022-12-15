import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import { CountComponent } from './count/count.component';
import {TuiButtonModule} from "@taiga-ui/core";
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'count', component: CountComponent },
  { path: 'result', component: ResultPageComponent }
]

@NgModule({
  declarations: [
    MainPageComponent,
    CountComponent,
    ResultPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiButtonModule,
  ]
})
export class CountingModule { }
