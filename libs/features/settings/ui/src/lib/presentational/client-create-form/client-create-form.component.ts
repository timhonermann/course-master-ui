import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'cm-client-create-form',
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './client-create-form.component.html',
  styleUrl: './client-create-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCreateFormComponent {
  readonly clientCreationTriggered = output<string>();

  readonly clientControl = new FormControl('', [Validators.required]);

  onCreateClientTriggered(): void {
    const name = this.clientControl.value ?? '';

    this.clientCreationTriggered.emit(name);
  }
}
