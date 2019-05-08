import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../core/model/item';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() selectedNotification: Item;

  constructor() { }

  ngOnInit() {
  }

}
