import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import {AuthInterceptor} from "./app/interceptors/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UnauthorizedInterceptorInterceptor} from "./app/interceptors/unauthorized-interceptor.interceptor";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptorInterceptor, multi: true },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
  ],
});
