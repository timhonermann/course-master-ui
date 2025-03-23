import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseType } from '@course-master/features/settings/model';
import { CourseTypeCardComponent } from '../course-type-card/course-type-card.component';

@Component({
  selector: 'cm-course-type-list',
  imports: [CommonModule, CourseTypeCardComponent],
  templateUrl: './course-type-list.component.html',
  styleUrl: './course-type-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseTypeListComponent {
  readonly courseTypes = input.required<CourseType[]>();
}
