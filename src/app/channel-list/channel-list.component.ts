import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core/services/core.service';
import { Channel } from '../core/models/channel';
import { ChannelList } from '../core/models/channel-list';
import { DataTransferService } from '../core/services/data-transfer.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  public response: Channel;
  private channelsList = ChannelList;

  constructor(private coreService: CoreService,
              private service: DataTransferService) {
  }

  ngOnInit() { }

  getFeed(url: string) {
    this.coreService.getFeedContent(url).subscribe((response: Channel) => {
      this.response = response;
      console.log('response', this.response);
      // send message to subscribers via observable subject
      this.service.sendMessage(this.response);
    });
  }

  /*sendMessage(): void {
    // send message to subscribers via observable subject
    this.services.sendMessage(this.response);
  }*/
}
