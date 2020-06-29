import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { DataFilesService } from 'src/app/services/data-files.service';

@Component({
  selector: 'app-read-excel-files',
  templateUrl: './read-excel-files.component.html',
  styleUrls: ['./read-excel-files.component.scss'],
})
export class ReadExcelFilesComponent implements OnInit {
  constructor(private dataFilesService: DataFilesService) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    /* wire up file reader */
    const target: DataTransfer = event.target as DataTransfer;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws);
      this.dataFilesService.data = data;
      console.log(data);
    };
  }
}
