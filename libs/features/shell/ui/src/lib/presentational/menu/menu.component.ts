import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MenuLayoutComponent } from '@course-master/features/shell/layout';
import { MenuItem } from '@course-master/features/shell/model';
import { LogoComponent } from '../logo/logo.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'cm-menu',
  imports: [
    CommonModule,
    MenuLayoutComponent,
    LogoComponent,
    MenuItemsComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  readonly menuItems = input.required<MenuItem[]>();

  readonly logoClicked = output();

  onLogoClicked(): void {
    this.logoClicked.emit();
  }
}
