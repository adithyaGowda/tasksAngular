import { Component, OnInit } from '@angular/core';
import { SiblingInteractionServiceService } from './../sibling-interaction-service.service';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private siblingService: SiblingInteractionServiceService) { }

  ngOnInit() {
  }

  sendMessage(data) {
    this.siblingService.message.next(data);
  }

}
