import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../routes/app-routing.module';
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
import { ButtonComponent } from '../components/Button/button.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NavbarComponent } from '../components/Navbar/navbar.component';
import { FooterComponent } from '../components/Footer/footer.component';
import { ForgotPasswordVerifyComponent } from './forgot-password-verify/forgot-password-verify.component';
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import {
  CarouselCaptionComponent,
  CarouselComponent, CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import { BrowseComponent } from './browse/browse.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'; // ✅ Import new HTTP client
import { ModalModule } from 'ngx-bootstrap/modal';

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
    WatchlistComponent,
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    ForgotPasswordVerifyComponent,
    BrowseComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Select,
    FormsModule,
    ModalModule.forRoot(),
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    ToggleSwitch,
    MatSlideToggle,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
