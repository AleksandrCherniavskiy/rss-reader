import { Component, OnInit, Input } from '@angular/core';

import { Channel } from '../core/models/channel';
import { Item } from '../core/models/item';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})

export class NotificationListComponent implements OnInit {

  @Input() feed: Channel;

  selectedNotification: Item;

  constructor() { }

  ngOnInit() {
  }

}
