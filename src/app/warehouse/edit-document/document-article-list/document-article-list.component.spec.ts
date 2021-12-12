import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentArticleListComponent } from './document-article-list.component';

describe('DocumentArticleListComponent', () => {
  let component: DocumentArticleListComponent;
  let fixture: ComponentFixture<DocumentArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentArticleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
