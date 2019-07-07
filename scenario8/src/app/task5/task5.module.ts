import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C7Component } from './c7/c7.component';
import { C8Component } from './c8/c8.component';
import { C9Component } from './c9/c9.component';

@NgModule({
  declarations: [C7Component, C8Component, C9Component],
  imports: [
    CommonModule
  ],
  exports : [C7Component, C8Component, C9Component]
})
export class Task5Module { }
