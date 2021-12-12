import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from 'src/app/model/Document.model';
import { WarehouseService } from '../../service/warehouse.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css'],
})
export class DocumentDetailsComponent implements OnInit {
  document: Document;
  @Output() recordDocEmitter = new EventEmitter();

  constructor(
    private service: WarehouseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.getOneDocument(id).subscribe((response) => {
        this.document = response;
        console.log(this.document);
      });
    }
  }

  recordDocument() {
    if (this.document.id) {
      this.document.$status = 'recorded';
      this.document.$dateOfRecording = new Date().toJSON();

      this.recordDocEmitter.emit(this.document);
    }
  }
}
