import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDataExcelComponent } from './show-data-excel.component';

const routes: Routes = [{ path: '', component: ShowDataExcelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowDataExcelRoutingModule { }
