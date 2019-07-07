import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c11',
  templateUrl: './c11.component.html',
  styleUrls: ['./c11.component.css']
})
export class C11Component implements OnInit {

  @Input() public dataParent;
  constructor() { }

  ngOnInit() {
  }

}
