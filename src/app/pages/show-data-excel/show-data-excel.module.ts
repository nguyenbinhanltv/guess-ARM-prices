import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowDataExcelRoutingModule } from './show-data-excel-routing.module';
import { ShowDataExcelComponent } from './show-data-excel.component';
import { ReadExcelFilesComponent } from './read-excel-files/read-excel-files.component';


@NgModule({
  declarations: [ShowDataExcelComponent, ReadExcelFilesComponent],
  imports: [
    CommonModule,
    ShowDataExcelRoutingModule
  ]
})
export class ShowDataExcelModule { }
