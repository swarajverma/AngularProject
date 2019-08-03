import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { ViewallusersService } from '../services/viewallusers.service';
import { MatPaginator, MatSort } from '@angular/material';
import { ExampletableComponent } from '../exampletable/exampletable.component';

@Component({
  selector: 'app-leftaccordion',
  templateUrl: './leftaccordion.component.html',
  styleUrls: ['./leftaccordion.component.css']
})
export class LeftaccordionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, public oauthService: OAuthService,private exmptable: ExampletableComponent, private viewallusersService: ViewallusersService) {}
  
  ngOnInit() {
  }
  processMapAccordion:boolean=true;
  gotoRolesAccordion: boolean=true;
  manageUsersAccordion: boolean=true;
  gotoTrainingDBAccordion: boolean=true;
  gotoReportsAndListsAccordion: boolean=true;
  gotoDivisionaReportsAccordion: boolean=true;
  gotoMarysReportsAndListAccordion: boolean=true;
  reportsAccordion: boolean=true;

  showHideProcessMapAccordion()
  {
    this.processMapAccordion = !this.processMapAccordion;
    this.gotoRolesAccordion=true;
    this.gotoTrainingDBAccordion=true;
    this.reportsAccordion=true;
  }
  showHideGotoRolesAccordion(){
    this.gotoRolesAccordion=!this.gotoRolesAccordion;
    this.processMapAccordion =true;
    this.gotoTrainingDBAccordion=true;
    this.reportsAccordion=true;
  }
  showHideManageUsersAccordion(){
    this.manageUsersAccordion=!this.manageUsersAccordion;
  }
  showHideGotoTrainingDBAccordion(){
    this.gotoTrainingDBAccordion=!this.gotoTrainingDBAccordion;
    this.processMapAccordion =true;
    this.gotoRolesAccordion=true;
    this.reportsAccordion=true;
  }
  showHideGotoReportsAndListsAccordion(){
    this.gotoReportsAndListsAccordion=!this.gotoReportsAndListsAccordion;
    this.gotoDivisionaReportsAccordion=true;
    this.gotoMarysReportsAndListAccordion=true;

  }
  showHideGotoDivisionaReportsAccordion(){
    this.gotoDivisionaReportsAccordion=!this.gotoDivisionaReportsAccordion;
    this.gotoReportsAndListsAccordion=true;
    this.gotoMarysReportsAndListAccordion=true;
  }
  showHideGotoMarysReportsAndListAccordion(){
    this.gotoMarysReportsAndListAccordion=!this.gotoMarysReportsAndListAccordion;
    this.gotoReportsAndListsAccordion=true;
    this.gotoDivisionaReportsAccordion=true;
  }

  showHideReports(){
    this.reportsAccordion=!this.reportsAccordion;
    this.processMapAccordion =true;
    this.gotoRolesAccordion=true;
    this.gotoTrainingDBAccordion=true;

  }
  
  viewAllUsers(){
    this.processMapAccordion = true;
    this.gotoRolesAccordion=true;
    this.gotoTrainingDBAccordion=true;
    this.reportsAccordion=true;
    this.router.navigate(['/viewallusers']);
  }

  logout() {
    this.oauthService.logOut();
  }

  viewusers() {
    this.viewallusersService.viewAllUsers().subscribe(response => {
      console.log("Service Response - "+JSON.stringify(response));
    });
    console.log("web service output" + JSON.stringify(this.exmptable.dataSource));
  }
}
