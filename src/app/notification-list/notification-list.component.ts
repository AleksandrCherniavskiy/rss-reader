import { Component, Input } from '@angular/core';

import { Channel } from '../core/models/channel';
import { Item } from '../core/models/item';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})

export class NotificationListComponent {
  @Input() feed: Channel;

  selectedNotification: Item;
}
