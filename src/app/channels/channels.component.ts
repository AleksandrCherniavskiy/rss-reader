import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core/service/core.service';
import { ChannelResponse } from '../core/model/channel-response';
import { ChannelsList } from '../channels-list';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  private response: ChannelResponse;
  private channelsList = ChannelsList;

  constructor(private coreService: CoreService) {
  }

  ngOnInit() {}

  getFeed(url: string) {
    this.coreService.getFeedContent(url).subscribe((response: ChannelResponse) => {
      this.response = response;
      console.log('response', this.response);
    });
  }
}
