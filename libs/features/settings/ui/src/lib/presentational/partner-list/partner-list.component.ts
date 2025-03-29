import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Partner } from '@course-master/shared/partner/model';
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

  readonly deleteClicked = output<string>();

  onDeleteClicked(id: string): void {
    this.deleteClicked.emit(id);
  }
}
