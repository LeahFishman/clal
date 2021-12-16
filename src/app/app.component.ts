import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Department } from './models/Department';
import { Employee } from './models/employee';
import { _Task } from './models/task';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clal';
  tasks: _Task[] = [];
  label = "";
  constructor(private dataService: DataService) { }
  selectEmployee(event: Employee) {
    this.dataService.getTasksByEmployee(event.EmployeeName).subscribe((res: _Task[]) => {
      this.tasks = res;
    })
  }
  selectDepartment(event: Department) {
    this.dataService.getTasksByDepartment(event.DepartmentID).subscribe((res: _Task[]) => {
      this.tasks = res;
    })
  }


  // switchmsp
}
