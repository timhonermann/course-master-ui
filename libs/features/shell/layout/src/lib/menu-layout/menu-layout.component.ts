import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-menu-layout',
  imports: [CommonModule],
  templateUrl: './menu-layout.component.html',
  styleUrl: './menu-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLayoutComponent {}
