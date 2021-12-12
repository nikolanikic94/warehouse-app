import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  page: number = 1;
  @Input() collectionSize: number;
  @Output() pageEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changePage() {
    this.pageEmitter.emit({ page: this.page });
  }
}
