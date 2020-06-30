import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { DataFilesService } from 'src/app/services/data-files.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-read-excel-files',
  templateUrl: './read-excel-files.component.html',
  styleUrls: ['./read-excel-files.component.scss'],
})
export class ReadExcelFilesComponent implements OnInit {
  constructor(
    private dataFilesService: DataFilesService,
    private msg: NzMessageService
    ) {}

  ngOnInit(): void {}

  onFileChange(file: any) {
    console.log(file);

    if (file.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(file);
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

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
      this.onFileChange(info.file);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}
