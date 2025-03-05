import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {WatchlistComponent} from '../app/watchlist/watchlist.component';
import {SeriesComponent} from '../app/series/series.component';
import {MoviesComponent} from '../app/movies/movies.component';
import {EditProfileComponent} from '../app/edit-profile/edit-profile.component';
import {EnterPinComponent} from '../app/enter-pin/enter-pin.component';
import {FaqComponent} from '../app/faq/faq.component';
import {ForgotPasswordComponent} from '../app/forgot-password/forgot-password.component';
import {ForgotPasswordCreatePasswordComponent} from '../app/forgot-password-create-password/forgot-password-create-password.component';
import {ForgotPinComponent} from '../app/forgot-pin/forgot-pin.component';
import {ForgotPinReplaceComponent} from '../app/forgot-pin-replace/forgot-pin-replace.component';
import {SelectAvatarComponent} from '../app/select-avatar/select-avatar.component';
import {SelectProfileComponent} from '../app/select-profile/select-profile.component';
import {SignUpComponent} from '../app/sign-up/sign-up.component';
import {SignInComponent} from '../app/sign-in/sign-in.component';
import {ForgotPasswordVerifyComponent} from '../app/forgot-password-verify/forgot-password-verify.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'edit_profile', component: EditProfileComponent },
  { path: 'enter_pin', component: EnterPinComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  { path: 'forgot_password_replace', component: ForgotPasswordCreatePasswordComponent },
  { path: 'forgot_password_verify', component: ForgotPasswordVerifyComponent },
  { path: 'forgot_pin', component: ForgotPinComponent },
  { path: 'forgot_pin_replace', component: ForgotPinReplaceComponent },
  { path: 'select_avatar', component: SelectAvatarComponent },
  { path: 'select_profile', component: SelectProfileComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'sign_in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
