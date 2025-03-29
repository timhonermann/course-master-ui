import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Client } from '@course-master/shared/client/model';
import { ClientCardComponent } from '../client-card/client-card.component';

@Component({
  selector: 'cm-client-list',
  imports: [CommonModule, ClientCardComponent],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListComponent {
  readonly clients = input.required<Client[]>();

  readonly deleteClicked = output<string>();

  onDeleteClicked(id: string): void {
    this.deleteClicked.emit(id);
  }
}
