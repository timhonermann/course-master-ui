import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-setting-title',
  imports: [CommonModule],
  templateUrl: './setting-title.component.html',
  styleUrl: './setting-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingTitleComponent {
  readonly title = input.required<string>();
}
