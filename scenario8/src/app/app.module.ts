import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';
import { Task3Module } from './task3/task3.module';
import { Task4Module } from './task4/task4.module';
import { Task5Module } from './task5/task5.module';
import { Task6Module } from './task6/task6.module';

import { SiblingInteractionServiceService } from './sibling-interaction-service.service';
import { Task7Module } from './task7/task7.module';

@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   Task1Module,
   FormsModule,
   Task2Module,
   Task3Module,
   Task4Module,
   Task5Module,
   Task6Module,
   Task7Module,

 ],
 providers: [SiblingInteractionServiceService],
 bootstrap: [AppComponent]
})
export class AppModule { }
