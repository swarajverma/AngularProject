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
  data =[];

  constructor(private viewallusersService: UsersService) {
     this.viewallusersService.viewAllUsers().subscribe((users1) => {
     this.data = users1;
    });
    // this.data = [{"racfid":"wh12504","lastname":"Herman","firstname":"Wendy","mi":"D","employeetype":"Salary","organizationalrole":"Manager","jobposition":"Manager","sapteam1":"Manager","siteteammember":"abc","dept":"IT","shift":1,"manager":"Bill","sme":"Y"},{"racfid":"rs1234","lastname":"Shrivastava","firstname":"Rakhi","mi":"A","employeetype":"Salary","organizationalrole":"TL","jobposition":"TL","sapteam1":"TL","siteteammember":"abc","dept":"IT","shift":1,"manager":"Rajdeep","sme":"Y"},{"racfid":"pp90764","lastname":"Patil","firstname":"Priti","mi":"B","employeetype":"Salary","organizationalrole":"TL","jobposition":"TL","sapteam1":"TL","siteteammember":"abc","dept":"IT","shift":2,"manager":"Rajdeep","sme":"Y"},{"racfid":"w01m9kh","lastname":"Verma","firstname":"Swaraj","mi":"A","employeetype":"Salary","organizationalrole":"SSE","jobposition":"SSE","sapteam1":"SSE","siteteammember":"ABC","dept":"JD","shift":1,"manager":"Rajdeep","sme":"N"},{"racfid":"dussnk9","lastname":"Sharma","firstname":"Kalpit","mi":"C","employeetype":"Salary","organizationalrole":"SSE","jobposition":"SSE","sapteam1":"SSE","siteteammember":"ABC","dept":"IT","shift":1,"manager":"Rajdeep","sme":"N"},{"racfid":"ab37383","lastname":"Barnwal","firstname":"Amit","mi":"C","employeetype":"SOE","organizationalrole":"SOE","jobposition":"SOE","sapteam1":"SOE","siteteammember":"abc","dept":"IT","shift":1,"manager":"Rajdeep","sme":"N"},{"racfid":"AJ53127","lastname":"Joshi","firstname":"Apurva","mi":"A","employeetype":"Salary","organizationalrole":"TA","jobposition":"TA","sapteam1":"TA","siteteammember":"qwr","dept":"IT","shift":1,"manager":"Rajdeep","sme":"N"}] ;
    this.dataSource = new MatTableDataSource<any>(this.data);
  

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
