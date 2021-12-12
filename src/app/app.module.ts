import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { TableComponent } from './warehouse/table/table.component';
import { PaginationComponent } from './warehouse/pagination/pagination.component';
import { SettingsComponent } from './warehouse/settings/settings.component';
import { EditDocumentComponent } from './warehouse/edit-document/edit-document.component';
import { DocumentDetailsComponent } from './warehouse/edit-document/document-details/document-details.component';
import { AddNewDocumentComponent } from './warehouse/edit-document/add-new-document/add-new-document.component';
import { DocumentArticleListComponent } from './warehouse/edit-document/document-article-list/document-article-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    WarehouseComponent,
    TableComponent,
    PaginationComponent,
    SettingsComponent,
    EditDocumentComponent,
    DocumentDetailsComponent,
    AddNewDocumentComponent,
    DocumentArticleListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
