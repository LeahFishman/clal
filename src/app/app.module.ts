import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeComponent } from './components/tree/tree.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TreeComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    TreeModule,
    TableModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
