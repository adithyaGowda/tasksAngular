import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';

@NgModule({
  declarations: [C3Component, C4Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    C3Component,
    C4Component
  ]
})
export class Task3Module { }
