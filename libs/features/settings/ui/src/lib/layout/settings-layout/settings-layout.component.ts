import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-settings-layout',
  imports: [CommonModule],
  templateUrl: './settings-layout.component.html',
  styleUrl: './settings-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsLayoutComponent {}
