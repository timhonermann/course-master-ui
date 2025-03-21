import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ClientStore } from '@course-master/features/settings/domain';
import { ClientListComponent, SettingTitleComponent } from '@course-master/features/settings/ui';
import { MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'cm-client',
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    SettingTitleComponent,
    ClientListComponent,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientStore],
})
export class ClientComponent {
  readonly #clientStore = inject(ClientStore);

  readonly clients = this.#clientStore.entities;

  readonly clientControl = new FormControl('', [Validators.required]);

  createClient(): void {
    const name = this.clientControl.value ?? '';

    this.#clientStore.create(name);
  }
}
