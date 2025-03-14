import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@course-master/shared/header/ui';
import { ClientComponent } from '../client/client.component';

@Component({
  selector: 'cm-settings',
  imports: [CommonModule, HeaderComponent, ClientComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
