import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2/c2.component';

@NgModule({
  declarations: [C2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [C2Component]
})
export class Task2Module { }
