import { Item } from './item';
import { Feed } from './feed';

export class ChannelResponse {
  feed: Feed;
  items: Item[];
}
