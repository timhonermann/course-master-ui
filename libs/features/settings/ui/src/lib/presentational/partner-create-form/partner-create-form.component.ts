import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'cm-partner-create-form',
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './partner-create-form.component.html',
  styleUrl: './partner-create-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerCreateFormComponent {
  readonly partnerCreationTriggered = output<string>();

  readonly partnerControl = new FormControl('', [Validators.required]);

  onCreatePartnerTriggered(): void {
    const name = this.partnerControl.value ?? '';

    this.partnerCreationTriggered.emit(name);
  }
}
