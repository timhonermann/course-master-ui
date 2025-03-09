import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@course-master/features/shell/feature').then(
        (f) => f.ShellComponent,
      ),
  },
];
