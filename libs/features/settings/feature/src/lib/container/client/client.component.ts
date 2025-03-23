import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClientStore } from '@course-master/features/settings/domain';
import {
  ClientCreateFormComponent,
  ClientListComponent,
  SettingTitleComponent,
} from '@course-master/features/settings/ui';

@Component({
  selector: 'cm-client',
  imports: [
    SettingTitleComponent,
    ClientListComponent,
    ClientCreateFormComponent,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientStore],
})
export class ClientComponent {
  readonly #clientStore = inject(ClientStore);

  readonly clients = this.#clientStore.entities;

  createClient(name: string): void {
    this.#clientStore.create(name);
  }
}
