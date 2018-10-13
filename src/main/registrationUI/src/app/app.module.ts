import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientService } from './services/client.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [
  {path: '', component:EmployeeListComponent},
  {path: 'add-employee', component:EmployeeRegistrationComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    EmployeeListComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClientService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
