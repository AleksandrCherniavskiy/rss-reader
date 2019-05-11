import { Component } from '@angular/core';

import { CoreService } from '../core/services/core.service';
import { Channel } from '../core/models/channel';
import { ChannelList } from '../core/models/channel-list';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent {

  public response: Channel;
  private channelsList = ChannelList;
  selectedChannel: any;

  constructor(private coreService: CoreService) {
  }

  getFeed(channel: any) {
    this.coreService.getFeedContent(channel.url).subscribe((response: Channel) => {
      this.response = response;
    });
    this.selectedChannel = channel;
  }
}
