import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UsersService } from '../../services/users.service';
import { users } from '../users';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent  {

  displayedColumns = ['racfid', 'lastname', 'firstname', 'mi', 'employeetype', 'organizationalrole', 
  'jobposition','sapteam1', 'siteteammember', 'dept', 'shift', 'manager', 'sme'
];
  dataSource: MatTableDataSource<users>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private viewallusersService: UsersService) {
     this.viewallusersService.viewAllUsers().subscribe((users1) => {
     this.dataSource = new MatTableDataSource<any>(users1);
    }); 
  
  }
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
  /* export class users {
    racfid: string;
    lastname: string;
    firstname: string;
    mi: string;
    employeetype: string;
    organizationalrole: string;
    jobposition: string;
    sapteam1: String;
    siteteammember: string;
    dept: string;
    shift: number;
    manager: string;
    sme: string;

  }
 */
