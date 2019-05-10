import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ChannelResponse } from '../model/channel-response';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private data$ = new Subject<any>();

  sendMessage(message: ChannelResponse) {
    this.data$.next({ text: message });
  }

  clearMessage() {
    this.data$.next();
  }

  getMessage(): Observable<any> {
    return this.data$.asObservable();
  }
}
