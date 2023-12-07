import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp} from "@angular/fire/app"
import { environment } from "./../environments/environment.prod"
import { provideFirestore, getFirestore} from "@angular/fire/firestore"
import { firebaseConfig } from "./credenciales"
import { provideAuth, getAuth} from "@angular/fire/auth"


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
  provideFirebaseApp(()=>initializeApp(firebaseConfig)),
  provideFirestore(()=> getFirestore()),
  provideAuth(()=>getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
