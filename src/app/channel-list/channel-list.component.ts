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

  constructor(private coreService: CoreService) {
  }

  getFeed(url: string) {
    this.coreService.getFeedContent(url).subscribe((response: Channel) => {
      this.response = response;
    });
  }
}
