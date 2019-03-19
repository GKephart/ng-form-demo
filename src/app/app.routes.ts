import {RouterModule, Routes} from "@angular/router";
import {SplashComponent} from "./splash/splash.component";
import {CreateProfileComponent} from "./splash/create-profile/create-profile.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {AppComponent} from "./app.component"

import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DeepDiveInterceptor} from "./shared/interceptors/deep-dive.interceptor";
import {ApiService} from "./shared/services/api.service";

import {APP_BASE_HREF} from "@angular/common";
import {DatetimePickerComponent} from "./datetime-picker/datetime-picker.component";


export const allAppComponents = [AppComponent, SplashComponent, DatetimePickerComponent
	,UserDetailComponent, CreateProfileComponent];

export const routes: Routes = [

	{path: "datetime-form", component: DatetimePickerComponent},
	{path: "detailed-user/:userId", component: UserDetailComponent},
	{path: "", component: SplashComponent},
];

// an array of services

const services: any[] = [ApiService];

// an array of misc providers
const providers: any[] = [
	{provide: HTTP_INTERCEPTORS, useClass: DeepDiveInterceptor, multi: true}

];

export const appRoutingProviders: any[] = [providers, services];

export const routing = RouterModule.forRoot(routes);
