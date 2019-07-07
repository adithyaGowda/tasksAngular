import { Component, OnInit } from '@angular/core';
import { SiblingInteractionServiceService } from 'src/app/sibling-interaction-service.service';

@Component({
  selector: 'app-c13',
  templateUrl: './c13.component.html',
  styleUrls: ['./c13.component.css']
})
export class C13Component implements OnInit {

  constructor(private siblingService: SiblingInteractionServiceService) { }

  ngOnInit() {
  }

  sendMessage(data) {
    this.siblingService.message.next(data);
  }


}
