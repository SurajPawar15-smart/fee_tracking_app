import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from '../core/interceptor/auth-interceptor';
import { errorInterceptor } from '../core/interceptor/error-interceptor';
// ✅ Optional but useful imports for error handling and performance
import { provideZoneChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),               // ✅ Correct import name (not provideBrowserGlobalErrorListeners)
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authInterceptor,errorInterceptor])),
    provideRouter(routes)
  ]
};
