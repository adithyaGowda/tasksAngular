import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c7',
  templateUrl: './c7.component.html',
  styleUrls: ['./c7.component.css']
})
export class C7Component implements OnInit {

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(value) {
    this.childEvent.emit(value);
  }


}
