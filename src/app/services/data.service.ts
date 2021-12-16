import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Department } from '../models/department';
import { _Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  date: Date = new Date();
  constructor(private http: HttpClient) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
  }

  getEmployees() {
    return this.http.get('assets/data.json')
      .pipe(
        map((res: any) => res.employees)
      )
  }

  getDepartments(parentId: any) {
    return this.http.get('assets/data.json')
      .pipe(
        map((res: any) => res.departments
          .filter((x: Department) => x.ParentId === parentId)
          .map((d: Department) => { return { label: d.DepartmentName, leaf: false, data: d } })),
      )
  }
  getTasksByDepartment(departmentId: number) {
    return this.http.get('assets/data.json')
      .pipe(
        map((res: any) => res.tasks.filter((t: any) => t.DepartmentID === departmentId)
        .map((t:_Task)=>{return {DatePast:new Date(t.DueDate)<this.date,...t}})
        )
      )
  }
  getTasksByEmployee(employeeName: string) {
    return this.http.get('assets/data.json')
      .pipe(
        map((res: any) =>
          res.tasks.filter((t: _Task) => t.EmployeeName === employeeName)
          .map((t:_Task)=>{return {DatePast:new Date(t.DueDate)<this.date,...t}})
        )
      )
  }
  getTasks() {
    return this.http.get('assets/data.json')
      .pipe(
        map((res: any) => res.tasks)
      )
  }




}
