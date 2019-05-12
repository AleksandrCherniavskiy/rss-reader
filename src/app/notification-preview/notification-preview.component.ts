import { Component, Input } from '@angular/core';
import { Item } from '../core/models/item';

@Component({
  selector: 'app-notification-preview',
  templateUrl: './notification-preview.component.html'
})
export class NotificationPreviewComponent {
  @Input() selectedNotification: Item;
}
