import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import {HomeAdminComponent} from './admin/home-admin/home-admin.component';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {ChangeAppearanceComponent} from './User/change-appearance/change-appearance.component';
import {ChangeAvatarComponent} from './User/change-avatar/change-avatar.component';
import {ChangeInfoComponent} from './User/change-info/change-info.component';
import {ChangePasswordComponent} from './User/change-password/change-password.component';
import {RegisterComponent} from './account/register/register.component';
import {ShowComponent} from './provider/show/show.component';
import {ShowprofileproviderComponent} from './provider/showprofileprovider/showprofileprovider.component';
import {ShowtopviewComponent} from './showtopview/showtopview.component';
import {HomeComponent} from './User/home/home.component';
import {LoginComponent} from './User/login/login.component';
import {ShowProfileComponent} from './User/show-profile/show-profile.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {HomeboyComponent} from './provider/homeboy/homeboy.component';
import {HomegirlComponent} from './provider/homegirl/homegirl.component';
import {ShowAllBillComponent} from './admin/show-all-bill/show-all-bill.component';
import {ProviderShowBillComponent} from './User/provider-show-bill/provider-show-bill.component';
import {CreateProviderComponent} from './provider/create-provider/create-provider.component';
import {ProfileProviderComponent} from './provider/profile-provider/profile-provider.component';
import {AppComponent} from './app.component';
import { UserShowBillComponent } from './User/user-show-bill/user-show-bill.component';
import { AdproviderComponent } from './admin/adprovider/adprovider.component';
import { ForgetPassComponent } from './account/forget-pass/forget-pass.component';
import { ViewProviderComponent } from './provider/view-provider/view-provider.component';
import { ImageComponent } from './User/image/image.component';
import { VerifyComponent } from './account/verify/verify.component';





@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        ShowComponent,
        ShowtopviewComponent,
        ShowprofileproviderComponent,
        HomeAdminComponent,
        ShowProfileComponent,
        LoginComponent,
        ChangeInfoComponent,
        ChangeAvatarComponent,
        ChangeAppearanceComponent,
        ChangePasswordComponent,
        HomeboyComponent,
        HomegirlComponent,
        ShowAllBillComponent,
        CreateProviderComponent,
        ProfileProviderComponent,
        ShowAllBillComponent,
        ProviderShowBillComponent,
        UserShowBillComponent,
        AdproviderComponent,
        ForgetPassComponent,
        ViewProviderComponent,
        ImageComponent,
        VerifyComponent

    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
