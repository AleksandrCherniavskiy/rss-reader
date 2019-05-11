import {Component, OnInit, Input} from '@angular/core';

import { ChannelList } from '../core/models/channel-list';
import { Item } from '../core/models/item';
import { Channel } from '../core/models/channel';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() feedOutput: Channel;
  @Input() selectedNotification: Item;

  private numberOfChannels: number;
  private symbols: string;

  constructor() { }

  ngOnInit() {
    this.numberOfChannels = ChannelList.length;
  }

  getPieChart() {
    if (this.selectedNotification) {
      this.symbols = this.selectedNotification.title + this.selectedNotification.description + this.selectedNotification.pubDate;
      this.symbols = this.symbols.toLocaleLowerCase();
    }

    function getFrequency(str) {
      return str.split('').reduce( (prev, curr) => {
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
        return prev;
      }, {});
    }

    console.log(getFrequency(this.symbols));
  }
}
