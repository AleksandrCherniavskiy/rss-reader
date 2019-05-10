import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ChannelResponse } from '../model/channel-response';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private rss2json = 'https://api.rss2json.com/v1/api.json?rss_url=';
  private apiKey = '&api_key=n9o0d3tftyrgkyxri3y7pnysmrkogixtzgxt9b1q';

  constructor(private http: HttpClient) { }

  getFeedContent(url: string): Observable<ChannelResponse> {
    return this.http.get<ChannelResponse>(this.rss2json + url + this.apiKey + '&count=50')
    .pipe(
      catchError(this.handleError('get feed content', new ChannelResponse()))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
