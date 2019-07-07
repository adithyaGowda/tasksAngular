import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

  public name = 'Scenario 1';


  constructor() { }

  ngOnInit() {
  }
  printConsole(value) {
    console.log(value);
  }



}
