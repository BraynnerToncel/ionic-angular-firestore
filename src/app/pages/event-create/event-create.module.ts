import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventCreatePageRoutingModule } from './event-create-routing.module';

import { EventCreatePage } from './event-create.page';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventCreatePageRoutingModule,
    DatePipe
  ],
  declarations: [EventCreatePage],
  providers:[DatePipe]
})
export class EventCreatePageModule {}
