import { Component, OnInit } from '@angular/core';
import { DataFilesService } from 'src/app/services/data-files.service';

const dataUSCent = {
  chart: {
    caption: 'Biểu đô thể hiện sự thay đổi giá của vật liệu len mịn, len thô, bột gỗ từ năm 1990 - 2010',
    subcaption: 'Click & drag on the plot area to zoom & then scroll',
    yaxisname: 'US Cent / Kg',
    xaxisname: 'Month',
    forceaxislimits: '1',
    pixelsperpoint: '0',
    pixelsperlabel: '30',
    compactdatamode: '1',
    dataseparator: '|',
    theme: 'candy',
  },
  categories: [
    {
      category: '',
    },
  ],
  dataset: [
    {
      seriesname: 'Coarse wool Price',
      data: '',
    },
    {
      seriesname: 'Fine wool Price',
      data: '',
    },
    {
      seriesname: 'Wood pulp Price',
      data: '',
    },
  ],
};

const dataUSDollar = {
  chart: {
    caption: 'Biểu đô thể hiện sự thay đổi giá của vật liệu gỗ cứng, gỗ xẻ cứng, da, gỗ dán, gỗ mềm, gỗ xẻ mềm từ năm 1990 - 2010',
    subcaption: 'Click & drag on the plot area to zoom & then scroll',
    yaxisname: 'Dollars / m3',
    xaxisname: 'Month',
    forceaxislimits: '1',
    pixelsperpoint: '0',
    pixelsperlabel: '30',
    compactdatamode: '1',
    dataseparator: '|',
    theme: 'candy',
  },
  categories: [
    {
      category: '',
    },
  ],
  dataset: [
    {
      seriesname: 'Hard log Price',
      data: '',
    },
    {
      seriesname: 'Hard sawnwood Price',
      data: '',
    },
    {
      seriesname: 'Hide Price',
      data: '',
    },
    {
      seriesname: 'Plywood Price',
      data: '',
    },
    {
      seriesname: 'Soft sawnwood Price',
      data: '',
    },
    {
      seriesname: 'Softlog Price',
      data: '',
    },
  ],
};

const dataUSDollarKg = {
  chart: {
    caption: 'Biểu đô thể hiện sự thay đổi giá của vật liệu vải, cao su từ năm 1990 - 2010',
    subcaption: 'Click & drag on the plot area to zoom & then scroll',
    yaxisname: 'Dollars / Kg',
    xaxisname: 'Month',
    forceaxislimits: '1',
    pixelsperpoint: '0',
    pixelsperlabel: '30',
    compactdatamode: '1',
    dataseparator: '|',
    theme: 'candy',
  },
  categories: [
    {
      category: '',
    },
  ],
  dataset: [
    {
      seriesname: 'Cotton Price',
      data: '',
    },
    {
      seriesname: 'Rubber Price',
      data: '',
    },
  ],
};

const dataUSDollarT = {
  chart: {
    caption: 'Biểu đô thể hiện sự thay đổi giá của vật liệu cùi dừa từ năm 1990 - 2010',
    subcaption: 'Click & drag on the plot area to zoom & then scroll',
    yaxisname: 'Dollar / T',
    xaxisname: 'Month',
    forceaxislimits: '1',
    pixelsperpoint: '0',
    pixelsperlabel: '30',
    compactdatamode: '1',
    dataseparator: '|',
    theme: 'candy',
  },
  categories: [
    {
      category: '',
    },
  ],
  dataset: [
    {
      seriesname: 'Copra Price',
      data: '',
    },
  ],
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  width = window.screen.width - 50;
  height = window.screen.height / 2;
  type = 'zoomline';
  dataFormat = 'json';
  dataSource1 = dataUSCent;
  dataSource2 = dataUSDollar;
  dataSource3 = dataUSDollarKg;
  dataSource4 = dataUSDollarT;

  constructor(
    public dataFileService: DataFilesService
  ) {
    if (this.dataFileService.data) {
      for (const a of this.dataFileService.data) {
        dataUSCent.categories[0].category += `${a.Month}|`;
        dataUSDollar.categories[0].category += `${a.Month}|`;
        dataUSDollarKg.categories[0].category += `${a.Month}|`;
        dataUSDollarT.categories[0].category += `${a.Month}|`;

        dataUSCent.dataset[0].data += `${a['Coarse wool Price']}|`;
        dataUSCent.dataset[1].data += `${a['Fine wool Price']}|`;
        dataUSCent.dataset[2].data += `${a['Wood pulp Price']}|`;

        dataUSDollar.dataset[0].data += `${a['Hard log Price']}|`;
        dataUSDollar.dataset[1].data += `${a['Hard sawnwood Price']}|`;
        dataUSDollar.dataset[2].data += `${a['Hide Price']}|`;
        dataUSDollar.dataset[3].data += `${a['Plywood Price']}|`;
        dataUSDollar.dataset[4].data += `${a['Soft sawnwood Price']}|`;
        dataUSDollar.dataset[5].data += `${a['Softlog Price']}|`;

        dataUSDollarKg.dataset[0].data += `${a['Cotton Price']}|`;
        dataUSDollarKg.dataset[1].data += `${a['Rubber Price']}|`;

        dataUSDollarT.dataset[0].data += `${a['Copra Price']}|`;
      }
    }
  }

  ngOnInit(): void {}
}
