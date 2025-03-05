import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EnterPinComponent } from './enter-pin/enter-pin.component';
import { FaqComponent } from './faq/faq.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordCreatePasswordComponent } from './forgot-password-create-password/forgot-password-create-password.component';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { ForgotPinReplaceComponent } from './forgot-pin-replace/forgot-pin-replace.component';
import { MoviesComponent } from './movies/movies.component';
import { SelectAvatarComponent } from './select-avatar/select-avatar.component';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { SeriesComponent } from './series/series.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditProfileComponent,
    EnterPinComponent,
    FaqComponent,
    ForgotPasswordComponent,
    ForgotPasswordCreatePasswordComponent,
    ForgotPinComponent,
    ForgotPinReplaceComponent,
    MoviesComponent,
    SelectAvatarComponent,
    SelectProfileComponent,
    SeriesComponent,
    SignInComponent,
    SignUpComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
