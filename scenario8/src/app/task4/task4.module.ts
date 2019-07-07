import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';

@NgModule({
  declarations: [C5Component, C6Component],
  imports: [
    CommonModule
  ],
  exports : [C5Component, C6Component]
})
export class Task4Module { }
