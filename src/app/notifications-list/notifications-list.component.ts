import { Component, OnInit, Input } from '@angular/core';

import { ChannelResponse } from '../core/model/channel-response';
import { Item } from '../core/model/item';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss']
})

export class NotificationsListComponent implements OnInit {

  @Input() feed: ChannelResponse;

  private selectedNotification: Item;

  constructor() { }

  ngOnInit() {
  }

}
