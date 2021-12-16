import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  departments: TreeNode[] = [];
  selectedDepartment:any=null;
  loading: boolean = false;

  @Output()
  selectDepartment = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loading = true;
    this.dataService.getDepartments(null).subscribe((dep: TreeNode[]) => {
      this.departments = dep;
      this.loading = false;
    });

  }

  nodeExpand(event: any) {

    if (event.node) {
      this.dataService.getDepartments(event.node.data.DepartmentID).subscribe(nodes => {
        event.node.children = nodes
      });
    }
  }

  onNodeSelect() {
    this.selectDepartment.emit(this.selectedDepartment.data);
  }
}

