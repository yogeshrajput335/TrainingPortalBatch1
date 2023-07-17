import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './common/reducers/product.reducer';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeFormComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
    StoreModule.forRoot({product: addProductReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
