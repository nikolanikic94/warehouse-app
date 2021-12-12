import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/Article.model';
import { Item } from 'src/app/model/Item.model';
import { WarehouseService } from '../../service/warehouse.service';

@Component({
  selector: 'app-add-new-document',
  templateUrl: './add-new-document.component.html',
  styleUrls: ['./add-new-document.component.css'],
})
export class AddNewDocumentComponent implements OnInit {
  addNewItemForm: FormGroup;
  articles: Article[];
  @Output() addNewEmitter = new EventEmitter();

  constructor(
    private service: WarehouseService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.addNewItemForm = this.fb.group({
      article: '',
      price: '',
      quantity: '',
    });
  }

  ngOnInit(): void {
    this.service.getAllArticles().subscribe((response) => {
      this.articles = response.$results;
    });
  }

  onSubmit() {
    let newItem = new Item(this.addNewItemForm.value);
    let id = Number(this.route.snapshot.paramMap.get('id'));
    newItem.$documents = id;

    console.log(newItem);
    this.addNewEmitter.emit(newItem);
    this.addNewItemForm.reset();
  }
}
