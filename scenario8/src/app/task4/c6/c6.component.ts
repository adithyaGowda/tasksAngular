import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c6',
  templateUrl: './c6.component.html',
  styleUrls: ['./c6.component.css']
})
export class C6Component implements OnInit {

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent(value) {
    this.childEvent.emit(value);
  }

}
