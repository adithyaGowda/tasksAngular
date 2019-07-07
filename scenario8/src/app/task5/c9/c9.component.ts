import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c9',
  templateUrl: './c9.component.html',
  styleUrls: ['./c9.component.css']
})
export class C9Component implements OnInit {

  @Output() public parentEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  getMsg(event) {
    this.parentEvent.emit(event);
  }

}
