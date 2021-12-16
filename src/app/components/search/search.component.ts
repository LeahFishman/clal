import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  selectedEmployee:any=null;
  employees: Employee[] = [];
  @Output()
  selectEmployee = new EventEmitter();
  constructor(private dataService: DataService) {
    this.dataService.getEmployees().subscribe(res => {
      this.employees = res;
    })

  }

  ngOnInit(): void {

  }

  onChange(): void {
    this.selectEmployee.emit(this.selectedEmployee);
  }

}
