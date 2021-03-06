import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count = 0;
  stockData = [
    {
      Symbol: 'AAPL',
      Company: 'Apple Inc.',
      Price: '132.54'
    },
    {
      Symbol: 'INTC',
      Company: 'Intel Corporation',
      Price: '33.45'
    },
    {
      Symbol: 'GOOG',
      Company: 'Google Inc',
      Price: '554.52'
    },
  ];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('NoraUi Demo');
  }

  alertDate() {
    alert('OK');
    this.count = this.count + 1;
  }

  convertArrayOfObjectsToCSV(args) {
    let result;
    let ctr;
    let keys;
    let columnDelimiter;
    let lineDelimiter;
    let data;
    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }
    columnDelimiter = args.columnDelimiter || ';';
    lineDelimiter = args.lineDelimiter || '\n';
    keys = Object.keys(data[0]);
    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;
    data.forEach((item) => {
      ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) {
          result += columnDelimiter;
        }
        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }

  exportCSV(args) {
    const csv = this.convertArrayOfObjectsToCSV({
      data: this.stockData
    });
    if (csv == null) {
      return;
    }
    const filename = args.filename || 'export.csv';
    console.log(csv);
    const blob = new Blob([csv]);
    saveAs(blob, filename);
  }

}
