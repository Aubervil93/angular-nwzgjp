import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {LoggerService} from './logger.service';
import {ConsoleLoggerService} from './console-logger.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [ { provide: LoggerService, useClass: ConsoleLoggerService } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
