import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Department } from './models/department';
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
  ngUnsubscribe: Subject<any> = new Subject<any>();
  constructor(private dataService: DataService) { }
  selectEmployee(event: Employee) {
    this.ngUnsubscribe.next(true);
    this.dataService.getTasksByEmployee(event.EmployeeName)
        //in case of select department
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res: _Task[]) => {
        debugger;
        this.tasks = res;
      })
  }
  selectDepartment(event: Department) {
    this.ngUnsubscribe.next(true);
    this.dataService.getTasksByDepartment(event.DepartmentID)
    //in case of select employee
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((res: _Task[]) => {
      this.tasks = res;
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.complete();
  }
}
