import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingInteractionServiceService {

  message: any = new Subject<any>();
  constructor() { }
}
