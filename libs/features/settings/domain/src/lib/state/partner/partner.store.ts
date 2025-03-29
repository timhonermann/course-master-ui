import { inject } from '@angular/core';
import { PartnerService } from '@course-master/shared/partner/domain';
import { Partner, PartnerCreation } from '@course-master/shared/partner/model';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import {
  addEntity,
  removeEntity,
  setAllEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, filter, map, pipe } from 'rxjs';

export const PartnerStore = signalStore(
  withEntities<Partner>(),
  withMethods((store, partnerService = inject(PartnerService)) => ({
    _loadPartners: rxMethod<void>(
      exhaustMap(() =>
        partnerService.getAll().pipe(
          tapResponse({
            next: (partners) => patchState(store, setAllEntities(partners)),
            error: () => console.error('Error loading partners'),
          }),
        ),
      ),
    ),

    create: rxMethod<string>(
      pipe(
        map((value) => value.trim()),
        filter(Boolean),
        map((name): PartnerCreation => ({ name })),
        exhaustMap((partnerCreation) =>
          partnerService.create(partnerCreation).pipe(
            tapResponse({
              next: (partner) => patchState(store, addEntity(partner)),
              error: () => console.error('Error creating partner'),
            }),
          ),
        ),
      ),
    ),

    delete: rxMethod<string>(
      exhaustMap((id) =>
        partnerService.delete(id).pipe(
          tapResponse({
            next: () => patchState(store, removeEntity(id)),
            error: () => console.error('Error deleting partner'),
          }),
        ),
      ),
    ),
  })),
  withHooks({
    onInit(store) {
      store._loadPartners();
    },
  }),
);

export type PartnerStore = InstanceType<typeof PartnerStore>;
