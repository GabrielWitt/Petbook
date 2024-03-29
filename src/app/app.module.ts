import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Plugins
import { Capacitor } from '@capacitor/core';
import { Chooser } from '@awesome-cordova-plugins/chooser/ngx';
import { NgxImageCompressService } from 'ngx-image-compress';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx'
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


// @angular/fire
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PERSISTENCE } from '@angular/fire/compat/auth';

import { getApp } from 'firebase/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      } else { return getAuth(); }
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: PERSISTENCE, useValue: 'session' },
    Chooser,
    NativeStorage,
    YoutubeVideoPlayer,
    NgxImageCompressService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
