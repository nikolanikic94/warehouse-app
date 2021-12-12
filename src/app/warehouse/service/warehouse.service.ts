import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleSearch } from 'src/app/model/ArticleSearch.model';
import { Document } from 'src/app/model/Document.model';
import { DocumentSearch } from 'src/app/model/DocumentSearch.model';
import { Item } from 'src/app/model/Item.model';
import { ItemSearch } from 'src/app/model/ItemSearch.model';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  documentURL = 'http://localhost:3000/api/documents';
  articleURL = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getAllDocuments(params): Observable<DocumentSearch> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('page', (params.page && JSON.stringify(params.page)) || '')
          .set(
            'pageSize',
            (params.pageSize && JSON.stringify(params.pageSize)) || ''
          )
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || ''),
      };
    }

    return this.http
      .get(this.documentURL, queryParams)
      .pipe(map((response) => new DocumentSearch(response)));
  }

  getOneDocument(id: number) {
    return this.http
      .get(`${this.documentURL}/${id}`)
      .pipe(map((response) => new Document(response)));
  }

  updateDocument(document: Document) {
    return this.http
      .put(`${this.documentURL}/${document.id}`, document)
      .pipe(map((response) => new Document(response)));
  }

  getAllArticles(): Observable<ArticleSearch> {
    return this.http
      .get(this.articleURL)
      .pipe(map((response) => new ArticleSearch(response)));
  }

  getAllItems(id: number): Observable<ItemSearch> {
    return this.http
      .get(`${this.documentURL}/${id}/items`)
      .pipe(map((response) => new ItemSearch(response)));
  }

  addNewItem(item: Item) {
    return this.http
      .post(`${this.documentURL}/${item.$documents}/items`, item)
      .pipe(map((response) => new Item(response)));
  }

  recordDocument(document: Document) {
    return this.http
      .put(`${this.documentURL}/${document.id}`, document)
      .pipe(map((response) => new Document(document)));
  }
}
