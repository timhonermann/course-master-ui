import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@course-master/shared/header/ui';
import { ClientComponent } from '../client/client.component';
import { PartnerComponent } from '../partner/partner.component';
import { SettingsLayoutComponent } from '@course-master/features/settings/ui';
import { CourseTypeComponent } from '../course-type/course-type.component';

@Component({
  selector: 'cm-settings',
  imports: [
    CommonModule,
    HeaderComponent,
    ClientComponent,
    PartnerComponent,
    SettingsLayoutComponent,
    CourseTypeComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
