import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');

export type AppConfig = {
  serverUrl: string;
};
