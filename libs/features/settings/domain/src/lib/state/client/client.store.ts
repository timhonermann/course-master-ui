import { inject } from '@angular/core';
import { ClientService } from '@course-master/shared/client/domain';
import { Client, ClientCreation } from '@course-master/shared/client/model';
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

    delete: rxMethod<string>(
      exhaustMap((id) =>
        clientService.delete(id).pipe(
          tapResponse({
            next: () => patchState(store, removeEntity(id)),
            error: () => console.error('Error deleting client'),
          }),
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
