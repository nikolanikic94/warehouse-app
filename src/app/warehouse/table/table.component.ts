import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Document } from 'src/app/model/Document.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() documents: Document[];
  @Input() tableSettings;
  @Output() sortEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sortByCriteria(criteria: string) {
    this.sortEmitter.emit({ sort: criteria });
  }
}
