import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { ChannelsList } from '../channels-list';
import { DataTransferService } from '../core/service/data-transfer.service';
import { Item } from '../core/model/item';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  @Input() feedOutput;
  @Input() selectedNotification: Item;

  message: any = {};
  subscription: Subscription;

  private numberOfChannels: number;
  private symbols: string;

  constructor( private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.numberOfChannels = ChannelsList.length;
    this.subscription = this.dataTransferService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  getPieChart() {
    if (this.selectedNotification) {
      this.symbols = this.selectedNotification.title + this.selectedNotification.description + this.selectedNotification.pubDate;
      this.symbols = this.symbols.toLocaleLowerCase();
    }

    /*const counter = str => {
      return str.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        console.log('total', total);
        return total;
      }, {});
    };
    counter('aabsssd');*/

    function getFrequency(str) {
      return str.split('').reduce( (prev, curr) => {
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
        return prev;
      }, {});
    }

    console.log(getFrequency(this.symbols));
  }


}
