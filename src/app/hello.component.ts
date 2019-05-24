import { Component, Input, OnInit } from '@angular/core';
import {HelloService} from './hello.service';


@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [HelloService]
})
export class HelloComponent  implements OnInit {
  @Input() name: string;

  constructor(private helloService: HelloService){

  }
  ngOnInit(){
        this.name = this.helloService.list();
  }
}
