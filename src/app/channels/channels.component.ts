import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core/service/core.service';
import { ChannelResponse } from '../core/model/channel-response';
import { ChannelsList } from '../channels-list';
import { DataTransferService } from '../core/service/data-transfer.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  public response: ChannelResponse;
  private channelsList = ChannelsList;

  constructor(private coreService: CoreService,
              private service: DataTransferService) {
  }

  ngOnInit() { }

  getFeed(url: string) {
    this.coreService.getFeedContent(url).subscribe((response: ChannelResponse) => {
      this.response = response;
      console.log('response', this.response);
      // send message to subscribers via observable subject
      this.service.sendMessage(this.response);
    });
  }

  /*sendMessage(): void {
    // send message to subscribers via observable subject
    this.service.sendMessage(this.response);
  }*/
}
