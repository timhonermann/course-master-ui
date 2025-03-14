import { Route } from '@angular/router';
import { featureUrl } from '@course-master/shared/routing/model';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@course-master/features/shell/feature').then(
        (f) => f.ShellComponent,
      ),
    children: [
      {
        path: featureUrl.COURSE,
        loadChildren: () =>
          import('@course-master/features/course/feature').then(
            (f) => f.routes,
          ),
      },
      {
        path: featureUrl.SETTINGS,
        loadChildren: () =>
          import('@course-master/features/settings/feature').then(
            (f) => f.routes,
          ),
      },
      {
        path: '**',
        redirectTo: featureUrl.COURSE,
      },
    ],
  },
];
