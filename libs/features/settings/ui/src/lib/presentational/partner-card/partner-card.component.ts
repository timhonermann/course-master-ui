import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Partner } from '@course-master/features/settings/model';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'cm-partner-card',
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatCardSubtitle,
  ],
  templateUrl: './partner-card.component.html',
  styleUrl: './partner-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerCardComponent {
  readonly partner = input.required<Partner>();
}
