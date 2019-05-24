import { Component } from '@angular/core';
import { LoggerService } from './logger.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  races = [
    {id: 1, name:'course cheval'}, 
    {id: 1, name:'course mule'}, 
    {id: 1, name:'course renard'}, 
    {id: 2, name:'course chat'}
    ];
foregroundColor = 'red';
fontColor = 'blue';

  constructor(private logger: LoggerService){
  // Incorrect source file name and line number :(
    logger.invokeConsoleMethod( 'info', 'AppComponent: logger.invokeConsoleMethod()');
    logger.invokeConsoleMethod( 'warn', 'AppComponent: logger.invokeConsoleMethod()');
    logger.invokeConsoleMethod( 'error', 'AppComponent: logger.invokeConsoleMethod()');

    // Correct source file name and line number :)
    logger.info('AppComponent: logger.info()');
    logger.warn('AppComponent: logger.warn()');
    logger.error('AppComponent: logger.error()');
  };
}
