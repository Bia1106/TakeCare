import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'mystatus-list.html',
  styleUrls: ['./mystatus-list.scss'],
})
export class MyStatusListPage {
  users: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }
}
