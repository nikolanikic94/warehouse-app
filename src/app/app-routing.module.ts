import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { EditDocumentComponent } from './warehouse/edit-document/edit-document.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'warehouse', component: WarehouseComponent },
  { path: 'warehouse/:id', component: EditDocumentComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
