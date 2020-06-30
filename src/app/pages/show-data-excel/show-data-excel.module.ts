import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowDataExcelRoutingModule } from './show-data-excel-routing.module';
import { ShowDataExcelComponent } from './show-data-excel.component';
import { ReadExcelFilesComponent } from './read-excel-files/read-excel-files.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
  declarations: [ShowDataExcelComponent, ReadExcelFilesComponent],
  imports: [
    CommonModule,
    ShowDataExcelRoutingModule,
    NgZorroAntdModule
  ]
})
export class ShowDataExcelModule { }
