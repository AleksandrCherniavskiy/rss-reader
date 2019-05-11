import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../core/models/item';

@Component({
  selector: 'app-notification-preview',
  templateUrl: './notification-preview.component.html',
  styleUrls: ['./notification-preview.component.scss']
})
export class NotificationPreviewComponent implements OnInit {

  @Input() selectedNotification: Item;

  constructor() { }

  ngOnInit() {
  }

}
