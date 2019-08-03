import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftaccordionComponent } from './leftaccordion/leftaccordion.component';
import { Routes, RouterModule } from '@angular/router';
import { AssignuserstoorgrolesComponent } from './assignuserstoorgroles/assignuserstoorgroles.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { ExampletableComponent } from './exampletable/exampletable.component';


export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}

const ROUTES: Routes=[
  {path:'assignuserstoorgroles', component: AssignuserstoorgrolesComponent},
  {path:'viewallusers', component: ViewallusersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftaccordionComponent,
    AssignuserstoorgrolesComponent,
    ViewallusersComponent,
    ExampletableComponent,
    

  ],
  imports: [
    OAuthModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [ExampletableComponent],
  bootstrap: [AppComponent]
 
})
export class AppModule { }