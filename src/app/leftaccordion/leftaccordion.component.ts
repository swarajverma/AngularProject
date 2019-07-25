import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-leftaccordion',
  templateUrl: './leftaccordion.component.html',
  styleUrls: ['./leftaccordion.component.css']
})
export class LeftaccordionComponent implements OnInit {

  constructor(private router: Router, public oauthService: OAuthService) {}

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
    console.log("this.processMapAccordion -"+this.processMapAccordion);
    this.processMapAccordion = !this.processMapAccordion;
  }
  showHideGotoRolesAccordion(){
    this.gotoRolesAccordion=!this.gotoRolesAccordion;
  }
  showHideManageUsersAccordion(){
    this.manageUsersAccordion=!this.manageUsersAccordion;
  }
  showHideGotoTrainingDBAccordion(){
    this.gotoTrainingDBAccordion=!this.gotoTrainingDBAccordion;
  }
  showHideGotoReportsAndListsAccordion(){
    this.gotoReportsAndListsAccordion=!this.gotoReportsAndListsAccordion;

  }
  showHideGotoDivisionaReportsAccordion(){
    this.gotoDivisionaReportsAccordion=!this.gotoDivisionaReportsAccordion;
  }
  showHideGotoMarysReportsAndListAccordion(){
    this.gotoMarysReportsAndListAccordion=!this.gotoMarysReportsAndListAccordion;
  }

  showHideReports(){
    this.reportsAccordion=!this.reportsAccordion;
  }
  logout() {
    this.oauthService.logOut();
  }
  goToAssignUsersToOrgRoles(){
    this.router.navigate(['/assignuserstoorgroles']);
  }
  viewAllUsers(){
    this.router.navigate(['/viewallusers']);
  }
}
