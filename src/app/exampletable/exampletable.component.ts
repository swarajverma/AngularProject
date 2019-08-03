import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ViewallusersService } from '../services/viewallusers.service';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-exampletable',
  templateUrl: './exampletable.component.html',
  styleUrls: ['./exampletable.component.css']
})
export class ExampletableComponent  {

  displayedColumns = ['racfid', 'lastname', 'firstname', 'mi', 'employee_type'];
  dataSource: MatTableDataSource<users>;
  data : any;
  // dataSource: users[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private viewallusersService: ViewallusersService) {
     this.viewallusersService.viewAllUsers().subscribe((users1) => {
     this.dataSource = new MatTableDataSource<any>(users1);
    }); 
    

    // this.dataSource=data;

    /* this.viewallusersService.viewAllUsers()
    .subscribe((data: Type[]) => {
      this.data = data;
      this.dataSource = new MatTableDataSource<any>(data);
    }); */
  
  }
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
  /* const data: users[]=[
    {racfid: "rs1234", lastname: 'Shrivastava', firstname: 'Rakhi', mi: 'A', employee_type:'Salary'} 
  ]; */

  export class users {
    racfid: string;
    lastname: string;
    firstname: string;
    mi: string;
    employee_type: string;
  }

