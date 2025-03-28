import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { APP_CONFIG, AppConfig } from '@course-master/shared/config/model';
import { serverUrlInterceptor } from '@course-master/shared/http/domain';
import { IconService } from '@course-master/shared/icon/domain';
import { appRoutes } from './app.routes';

export function getAppConfig(config: AppConfig): ApplicationConfig {
  return {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(appRoutes, withViewTransitions()),
      provideHttpClient(withInterceptors([serverUrlInterceptor])),
      provideAppInitializer(() => inject(IconService).init()),
      { provide: APP_CONFIG, useValue: config },
    ],
  };
}
