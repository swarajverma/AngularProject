import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewallusersDataSource } from './viewallusers-datasource';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewallusersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['RACFID', 'LastName', 'FirstName', 'MI', 'EmployeeType', 'OrganizationalRole', 'JobPosition', 'SAPTeam1', 'SiteTeamMember', 'Dept', 'Shift', 'Manager', 'SME'];

  ngOnInit() {
    this.dataSource = new ViewallusersDataSource(this.paginator, this.sort);
  }
}
