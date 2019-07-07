import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  @Input() public varb;
  constructor() { }

  ngOnInit() {
  }

}
