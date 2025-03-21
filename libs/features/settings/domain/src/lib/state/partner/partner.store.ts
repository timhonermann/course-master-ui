import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { addEntity, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { Partner, PartnerCreation } from '@course-master/features/settings/model';
import { inject } from '@angular/core';
import { PartnerService } from '../../service/partner.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, filter, map, pipe } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export const PartnerStore = signalStore(
  withEntities<Partner>(),
  withMethods((store, partnerService = inject(PartnerService)) => ({
    _loadPartners: rxMethod<void>(
      exhaustMap(() => partnerService.getAll().pipe(
        tapResponse({
          next: (partners) => patchState(store, setAllEntities(partners)),
          error: () => console.error('Error loading partners')
        })
      ))
    ),

    create: rxMethod<string>(
      pipe(
        map((value) => value.trim()),
        filter(Boolean),
        map((name): PartnerCreation => ({ name })),
        exhaustMap((partnerCreation) => partnerService.create(partnerCreation).pipe(
          tapResponse({
            next: (partner) => patchState(store, addEntity(partner)),
            error: () => console.error('Error creating partner')
          })
        ))
      )
    )
  })),
  withHooks({
    onInit(store) {
      store._loadPartners();
    }
  })
);

export type PartnerStore = InstanceType<typeof PartnerStore>;