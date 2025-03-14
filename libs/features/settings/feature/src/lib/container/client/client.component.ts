import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ClientStore } from '@course-master/features/settings/domain';

@Component({
  selector: 'cm-client',
  imports: [MatLabel, MatFormField, MatInput, ReactiveFormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClientStore],
})
export class ClientComponent {
  readonly #clientStore = inject(ClientStore);

  readonly clientControl = new FormControl('', [Validators.required]);

  readonly clients = this.#clientStore.entities;

  createClient(): void {
    const name = this.clientControl.value ?? '';

    this.#clientStore.create(name);
  }
}
