import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerStore } from '@course-master/features/settings/domain';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { SettingTitleComponent } from '@course-master/features/settings/ui';

@Component({
  selector: 'cm-partner',
  imports: [
    CommonModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    SettingTitleComponent,
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PartnerStore],
})
export class PartnerComponent {
  readonly #partnerStore = inject(PartnerStore);

  readonly partners = this.#partnerStore.entities;

  readonly partnerControl = new FormControl('', [Validators.required]);

  createPartner(): void {
    const name = this.partnerControl.value ?? '';

    this.#partnerStore.create(name);
  }
}
