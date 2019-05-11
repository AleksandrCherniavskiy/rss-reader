import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationPreviewComponent } from './notification-preview/notification-preview.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    NotificationListComponent,
    NotificationPreviewComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
