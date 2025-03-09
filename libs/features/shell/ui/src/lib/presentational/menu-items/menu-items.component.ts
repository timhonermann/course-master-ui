import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MenuItem } from '@course-master/features/shell/model';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'cm-menu-items',
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemsComponent {
  readonly menuItems = input.required<MenuItem[]>();
}
