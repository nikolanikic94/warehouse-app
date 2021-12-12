import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  showSettings: boolean = false;
  tableSettings = {
    dateOfCreation: true,
    dateOfRecording: true,
    status: true,
    transactionType: true,
    buisinessPartner: true,
    buisinessPartnerLocation: true,
    year: true,
  };

  @Output() tableSettingsEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleSettings() {
    this.showSettings === false
      ? (this.showSettings = true)
      : (this.showSettings = false);
  }

  changeTableSettings() {
    this.tableSettingsEmitter.emit(this.tableSettings);
  }
}
