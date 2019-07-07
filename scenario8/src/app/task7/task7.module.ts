import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C13Component } from './c13/c13.component';
import { C14Component } from './c14/c14.component';

@NgModule({
  declarations: [C13Component, C14Component],
  imports: [
    CommonModule
  ],
  exports : [
    C13Component,
    C14Component
  ]
})
export class Task7Module { }
