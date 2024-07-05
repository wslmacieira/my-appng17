import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { routes } from './app.routes';
import { NoopInterceptor } from '../interceptors/noop.intercept';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withHttpTransferCacheOptions({
      // includePostRequests: true,
      // filter(req) {
      //   console.log(req.headers)
      //   return true
      // },
    })),
    provideHttpClient(withFetch()),
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor
    // }
  ]
};


