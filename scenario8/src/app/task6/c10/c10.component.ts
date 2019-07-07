import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.css']
})
export class C10Component implements OnInit {

  @Output() public child1 = new EventEmitter();
  public myData = '';
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.child1.emit(this.myData);
  }


}
