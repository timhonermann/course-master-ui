import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTypeStore } from '@course-master/features/settings/domain';
import {
  CourseTypeCreateFormComponent,
  CourseTypeListComponent,
  SettingTitleComponent,
} from '@course-master/features/settings/ui';

@Component({
  selector: 'cm-course-type',
  imports: [
    CommonModule,
    SettingTitleComponent,
    CourseTypeCreateFormComponent,
    CourseTypeListComponent,
  ],
  templateUrl: './course-type.component.html',
  styleUrl: './course-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CourseTypeStore],
})
export class CourseTypeComponent {
  readonly #courseTypeStore = inject(CourseTypeStore);

  readonly courseTypes = this.#courseTypeStore.entities;

  createCourseType(name: string): void {
    this.#courseTypeStore.create(name);
  }
}
