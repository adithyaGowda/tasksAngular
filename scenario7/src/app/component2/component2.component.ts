import { Component, OnInit } from '@angular/core';
import { SiblingInteractionServiceService } from './../sibling-interaction-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private siblingService: SiblingInteractionServiceService) { }
  Fromchild1: any;
  ngOnInit() {
    this.siblingService.message.subscribe(data => {
      this.Fromchild1 = data;
    });
  }

}
