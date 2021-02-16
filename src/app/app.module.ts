import { FirebaseService } from './services/firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInSignUpComponent } from './sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './auth/auth';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInSignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(auth)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
