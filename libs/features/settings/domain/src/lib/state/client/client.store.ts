import { inject } from '@angular/core';
import { Client, ClientCreation } from '@course-master/features/settings/model';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import {
  addEntity,
  setAllEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, filter, map, pipe } from 'rxjs';
import { ClientService } from '../../service/client.service';

export const ClientStore = signalStore(
  withEntities<Client>(),
  withMethods((store, clientService = inject(ClientService)) => ({
    _loadClients: rxMethod<void>(
      exhaustMap(() =>
        clientService.getAll().pipe(
          tapResponse({
            next: (clients) => patchState(store, setAllEntities(clients)),
            error: () => console.error('Error loading clients'),
          }),
        ),
      ),
    ),

    create: rxMethod<string>(
      pipe(
        map((value) => value.trim()),
        filter(Boolean),
        map((name): ClientCreation => ({ name })),
        exhaustMap((clientCreation) =>
          clientService.create(clientCreation).pipe(
            tapResponse({
              next: (client) => patchState(store, addEntity(client)),
              error: () => console.error('Error creating client'),
            }),
          ),
        ),
      ),
    ),
  })),
  withHooks({
    onInit(store) {
      store._loadClients();
    },
  }),
);

export type ClientStore = InstanceType<typeof ClientStore>;
