import { Component, OnInit } from '@angular/core';
import { Document } from '../model/Document.model';
import { WarehouseService } from './service/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css'],
})
export class WarehouseComponent implements OnInit {
  documents: Document[];
  count: number;
  tableSettings: {};

  parameters = {
    page: 1,
    pageSize: 10,
    sort: '',
    sortDirection: '',
  };

  constructor(private service: WarehouseService) {}

  ngOnInit(): void {
    this.updateDocuments();
  }

  updateDocuments() {
    this.service.getAllDocuments(this.parameters).subscribe((response) => {
      this.documents = response.$results;
      this.count = response.$count;
    });
  }

  updateParams(value) {
    this.parameters.page = value.page;

    console.log(this.parameters.sortDirection);
    this.updateDocuments();
  }

  updateSortCriteria(value) {
    this.parameters.sort = value.sort;

    if (this.parameters.sortDirection === '') {
      this.parameters.sortDirection = 'desc';
    } else {
      this.parameters.sortDirection = '';
    }

    this.updateDocuments();
  }

  updateTableSettings(value) {
    this.tableSettings = value;
  }
}
