import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { getAppConfig } from './app/app.config';
import { environment } from './environments/environment';

fetch(environment.configUrl)
  .then((res) => res.json())
  .then((config) => {
    if (!environment.production) {
      console.info('Running with config', config);
    }

    bootstrapApplication(AppComponent, getAppConfig(config)).catch((err) =>
      console.error(err),
    );
  });
