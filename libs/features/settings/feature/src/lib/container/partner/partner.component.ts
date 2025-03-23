import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PartnerStore } from '@course-master/features/settings/domain';
import {
  PartnerCreateFormComponent,
  PartnerListComponent,
  SettingTitleComponent,
} from '@course-master/features/settings/ui';

@Component({
  selector: 'cm-partner',
  imports: [
    SettingTitleComponent,
    PartnerListComponent,
    PartnerCreateFormComponent,
  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PartnerStore],
})
export class PartnerComponent {
  readonly #partnerStore = inject(PartnerStore);

  readonly partners = this.#partnerStore.entities;

  createPartner(name: string): void {
    this.#partnerStore.create(name);
  }
}
