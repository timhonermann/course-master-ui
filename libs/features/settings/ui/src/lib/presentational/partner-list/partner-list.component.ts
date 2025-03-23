import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Partner } from '@course-master/features/settings/model';
import { PartnerCardComponent } from '../partner-card/partner-card.component';

@Component({
  selector: 'cm-partner-list',
  imports: [CommonModule, PartnerCardComponent],
  templateUrl: './partner-list.component.html',
  styleUrl: './partner-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerListComponent {
  readonly partners = input.required<Partner[]>();
}
