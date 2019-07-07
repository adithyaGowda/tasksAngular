import { Component, OnInit } from '@angular/core';
import { SiblingInteractionServiceService } from 'src/app/sibling-interaction-service.service';

@Component({
  selector: 'app-c14',
  templateUrl: './c14.component.html',
  styleUrls: ['./c14.component.css']
})
export class C14Component implements OnInit {

  constructor(private siblingService: SiblingInteractionServiceService) { }
  Fromchild1: any;
  ngOnInit() {
    this.siblingService.message.subscribe(data => {
      this.Fromchild1 = data;
    });

  }
}
