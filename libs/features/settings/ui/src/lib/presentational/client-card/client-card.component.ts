import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { Client } from '@course-master/features/settings/model';

@Component({
  selector: 'cm-client-card',
  imports: [
    CommonModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
  ],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCardComponent {
  readonly client = input.required<Client>();
}
