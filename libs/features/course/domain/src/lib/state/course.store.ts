import { inject } from '@angular/core';
import { Course } from '@course-master/features/course/model';
import { ClientService } from '@course-master/shared/client/domain';
import { Client } from '@course-master/shared/client/model';
import { CourseTypeService } from '@course-master/shared/course-type/domain';
import { CourseType } from '@course-master/shared/course-type/model';
import { PartnerService } from '@course-master/shared/partner/domain';
import { Partner } from '@course-master/shared/partner/model';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap } from 'rxjs';

type CourseState = {
  partners: Partner[];
  clients: Client[];
  courseTypes: CourseType[];
};

const initialState: CourseState = {
  partners: [],
  clients: [],
  courseTypes: [],
};

export const CourseStore = signalStore(
  withState<CourseState>(initialState),
  withEntities<Course>(),
  withMethods(
    (
      store,
      partnerService = inject(PartnerService),
      clientService = inject(ClientService),
      courseTypeService = inject(CourseTypeService),
    ) => ({
      _loadPartners: rxMethod<void>(
        exhaustMap(() =>
          partnerService.getAll().pipe(
            tapResponse({
              next: (partners) => patchState(store, { partners }),
              error: () => console.log('Error loading partners'),
            }),
          ),
        ),
      ),

      _loadClients: rxMethod<void>(
        exhaustMap(() =>
          clientService.getAll().pipe(
            tapResponse({
              next: (clients) => patchState(store, { clients }),
              error: () => console.log('Error loading clients'),
            }),
          ),
        ),
      ),

      _loadCourseTypes: rxMethod<void>(
        exhaustMap(() =>
          courseTypeService.getAll().pipe(
            tapResponse({
              next: (courseTypes) => patchState(store, { courseTypes }),
              error: () => console.log('Error loading courseTypes'),
            }),
          ),
        ),
      ),
    }),
  ),
  withHooks({
    onInit(store) {
      store._loadPartners();
      store._loadClients();
      store._loadCourseTypes();
    },
  }),
);
