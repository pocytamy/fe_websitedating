
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';

import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './User/login/login.component';
import {ChangeInfoComponent} from "./User/change-info/change-info.component";
import {ChangeAvatarComponent} from "./User/change-avatar/change-avatar.component";
import {ChangeAppearanceComponent} from "./User/change-appearance/change-appearance.component";
import {ChangePasswordComponent} from "./User/change-password/change-password.component";
import {ShowComponent} from "./provider/show/show.component";
import {ShowtopviewComponent} from "./showtopview/showtopview.component";
import { HomeComponent } from './User/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShowProfileComponent } from './User/show-profile/show-profile.component';
import { HomeboyComponent } from './provider/homeboy/homeboy.component';
import { HomegirlComponent } from './provider/homegirl/homegirl.component';
import { ShowAllBillComponent } from './admin/show-all-bill/show-all-bill.component';
import { ProfileProviderComponent } from './provider/profile-provider/profile-provider.component';
import { ProviderShowBillComponent } from './User/provider-show-bill/provider-show-bill.component';
import { CreateProviderComponent } from './provider/create-provider/create-provider.component';
import { UserShowBillComponent } from './User/user-show-bill/user-show-bill.component';
import { AdproviderComponent } from './admin/adprovider/adprovider.component';
import { ForgetPassComponent } from './account/forget-pass/forget-pass.component';
import { ViewProviderComponent } from './provider/view-provider/view-provider.component';
import { ImageComponent } from './User/image/image.component';
import { HomeAdminGuard } from './admin/home-admin/home-admin.guard';
import { AdproviderGuard } from './admin/adprovider/adprovider.guard';
import { ShowAllBillGuard } from './admin/show-all-bill/show-all-bill.guard';
import { ChangeApprearanceGuard } from './User/change-appearance/change-apprearance.guard';
import { ChangeAvatarGuard } from './User/change-avatar/change-avatar.guard';
import { ChangeInfoGuard } from './User/change-info/change-info.guard';
import { ChangePasswordGuard } from './User/change-password/change-password.guard';
import { CreateProviderGuard } from './provider/create-provider/create-provider.guard';
import { HomeboyGuard } from './provider/homeboy/homeboy.guard';
import { HomegirlGuard } from './provider/homegirl/homegirl.guard';
import { ImageGuard } from './User/image/image.guard';
import { ProfileProviderGuard } from './provider/profile-provider/profile-provider.guard';
import { ShowtopviewGuard } from './showtopview/showtopview.guard';
import { ProviderShowBillGuard } from './User/provider-show-bill/provider-show-bill.guard';
import { ShowProfileGuard } from './User/show-profile/show-profile.guard';
import { UserShowBillGuard } from './User/user-show-bill/user-show-bill.guard';
import { ViewProviderGuard } from './provider/view-provider/view-provider.guard';
import { VerifyComponent } from './account/verify/verify.component';




const routes: Routes = [
  {path:"admin", component: HomeAdminComponent, canActivate:[HomeAdminGuard]} ,
  {path:"show", component: ShowComponent},
  {path:"topview", component: ShowtopviewComponent, canActivate:[ShowtopviewGuard]},
  {path:"register", component: RegisterComponent},
  {path:"admin", component: HomeAdminComponent, canActivate:[HomeAdminGuard]},
  {path:"login", component: LoginComponent},
  {path:"forget", component: ForgetPassComponent},
  {path:"", component: HomeComponent},
  {path:"changeInfo", component: ChangeInfoComponent, canActivate:[ChangeInfoGuard]},
  {path:"changeAvatar", component: ChangeAvatarComponent, canActivate:[ChangeAvatarGuard]},
  {path:"changeAppearance", component: ChangeAppearanceComponent, canActivate:[ChangeApprearanceGuard]},
  {path:"changePassword", component: ChangePasswordComponent, canActivate:[ChangePasswordGuard]},
  {path:"showProfile", component: ShowProfileComponent, canActivate: [ShowProfileGuard]},
  {path:"homeBoy", component: HomeboyComponent, canActivate: [HomeboyGuard]},
  {path:"homeGirl", component: HomegirlComponent, canActivate: [HomegirlGuard]},
  {path:"showAllBill", component: ShowAllBillComponent, canActivate: [ShowAllBillGuard]},
  {path:"bill/:id", component: ProfileProviderComponent, canActivate: [ProfileProviderGuard]},
  {path:"providerShowBill", component: ProviderShowBillComponent, canActivate: [ProviderShowBillGuard]},
  {path:"profileProvider", component: CreateProviderComponent, canActivate: [CreateProviderGuard]},
  {path:"userShowBill", component: UserShowBillComponent, canActivate: [UserShowBillGuard]},
  {path:"adProvider", component: AdproviderComponent, canActivate: [AdproviderGuard]},
  {path:"viewProvider/:id", component: ViewProviderComponent, canActivate: [ViewProviderGuard]},
  {path:"image/:id", component: ImageComponent, canActivate: [ImageGuard]},
  {path:"verify/:code", component: VerifyComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
