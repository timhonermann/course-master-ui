import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '@course-master/features/shell/model';

@Component({
  selector: 'cm-menu-item',
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  readonly item = input.required<MenuItem>();
}
