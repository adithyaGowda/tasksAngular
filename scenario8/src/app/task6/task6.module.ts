import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C10Component } from './c10/c10.component';
import { C11Component } from './c11/c11.component';
import { C12Component } from './c12/c12.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [C10Component, C11Component, C12Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [C10Component, C11Component, C12Component]
})
export class Task6Module { }
