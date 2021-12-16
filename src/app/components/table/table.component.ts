import {  Component, Input, OnInit } from '@angular/core';
import { _Task } from 'src/app/models/task';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  tasks: _Task[] = [];
  cols: any[] = [];
  rows: number[] = [];
  height: string;
  constructor() {
    this.height = window.innerHeight - 75 + "px";
  }

  ngOnInit() {
    this.cols = [
      { field: 'TaskNumber', header: 'TaskNumber' },
      { field: 'TaskName', header: 'Name' },
      { field: 'StatusID', header: 'Status' },
      { field: 'EmployeeName', header: 'Employee' },
      { field: 'DepartmentID', header: 'DepartmentID' },
      { field: 'DueDate', header: 'Date' }

    ];

    this.rows = Array.from({ length: 100 }, (_, i) => i + 1);
 
  }



}

