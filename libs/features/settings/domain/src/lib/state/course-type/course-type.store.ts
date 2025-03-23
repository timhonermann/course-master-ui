import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import {
  addEntity,
  setAllEntities,
  withEntities,
} from '@ngrx/signals/entities';
import {
  CourseType,
  CourseTypeCreation,
} from '@course-master/features/settings/model';
import { inject } from '@angular/core';
import { CourseTypeService } from '../../service/course-type.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, filter, map, pipe } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export const CourseTypeStore = signalStore(
  withEntities<CourseType>(),
  withMethods((store, courseTypeService = inject(CourseTypeService)) => ({
    _loadCourseTypes: rxMethod<void>(
      exhaustMap(() =>
        courseTypeService.getAll().pipe(
          tapResponse({
            next: (courseTypes) =>
              patchState(store, setAllEntities(courseTypes)),
            error: () => console.error('Error loading course types'),
          }),
        ),
      ),
    ),

    create: rxMethod<string>(
      pipe(
        map((value) => value.trim()),
        filter(Boolean),
        map((name): CourseTypeCreation => ({ name })),
        exhaustMap((courseTypeCreation) =>
          courseTypeService.create(courseTypeCreation).pipe(
            tapResponse({
              next: (courseType) => patchState(store, addEntity(courseType)),
              error: () => console.error('Error creating course type'),
            }),
          ),
        ),
      ),
    ),
  })),
  withHooks({
    onInit(store) {
      store._loadCourseTypes();
    },
  }),
);

export type CourseTypeStore = InstanceType<typeof CourseTypeStore>;
