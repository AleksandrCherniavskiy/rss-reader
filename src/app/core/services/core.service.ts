import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  getFeedContent(url: string): Observable<Channel> {
    return this.http
    .get<Channel>(`https://api.rss2json.com/v1/api.json?rss_url=${url}&api_key=n9o0d3tftyrgkyxri3y7pnysmrkogixtzgxt9b1q&count=50`);
  }
}
