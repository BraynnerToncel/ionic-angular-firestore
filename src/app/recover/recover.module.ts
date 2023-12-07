import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverPageRoutingModule } from './recover-routing.module';

import { RecoverPage } from './recover.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RecoverPageRoutingModule
  ],
  declarations: [RecoverPage]
})
export class RecoverPageModule {}
