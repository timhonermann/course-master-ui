import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { Partner } from '@course-master/features/settings/model';

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

  readonly deleteClicked = output();

  onDeleteClicked(): void {
    this.deleteClicked.emit();
  }
}
