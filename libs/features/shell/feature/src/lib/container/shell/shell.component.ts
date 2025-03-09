import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuStore } from '@course-master/features/shell/domain';
import { ShellLayoutComponent } from '@course-master/features/shell/layout';
import { MenuComponent } from '@course-master/features/shell/ui';

@Component({
  selector: 'cm-shell',
  imports: [CommonModule, ShellLayoutComponent, MenuComponent, RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MenuStore],
})
export class ShellComponent {
  readonly #menuStore = inject(MenuStore);

  readonly menuItems = this.#menuStore.menuItems;

  onLogoClicked(): void {
    this.#menuStore.navigateToHome();
  }
}
