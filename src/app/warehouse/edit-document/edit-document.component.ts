import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WarehouseService } from '../service/warehouse.service';

import { Document } from 'src/app/model/Document.model';
import { Item } from 'src/app/model/Item.model';
import { Article } from 'src/app/model/Article.model';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css'],
})
export class EditDocumentComponent implements OnInit {
  document: Document;
  items: Item[];
  articles: Article[];
  constructor(
    private service: WarehouseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getOneDocument(id).subscribe((response) => {
      this.document = response;
    });

    this.service.getAllArticles().subscribe((response) => {
      this.articles = response.$results;
      this.service.getAllItems(id).subscribe((response) => {
        this.items = response.$results.map((item) => {
          return this.mapArticle(item);
        });
      });
    });
  }

  addNewItem(item: Item) {
    item.id = this.document.id;
    this.service
      .addNewItem(item)
      .subscribe((response) => this.items.push(this.mapArticle(response)));
  }

  recordDocument(document: Document) {
    this.service
      .recordDocument(document)
      .subscribe((response) => (this.document = response));
  }

  private mapArticle(item: Item): Item {
    for (let i = 0; i < this.articles.length; i++) {
      if (this.articles[i].$code == item.$article) {
        item.$article = this.articles[i].$name;
        return item;
      }
    }
  }
}
