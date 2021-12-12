import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/model/Article.model';
import { Item } from 'src/app/model/Item.model';
import { WarehouseService } from '../../service/warehouse.service';

@Component({
  selector: 'app-document-article-list',
  templateUrl: './document-article-list.component.html',
  styleUrls: ['./document-article-list.component.css'],
})
export class DocumentArticleListComponent implements OnInit {
  @Input() items: Item[];
  constructor() {}

  ngOnInit(): void {}
}
