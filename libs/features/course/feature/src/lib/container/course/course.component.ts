import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@course-master/shared/header/ui';

@Component({
  selector: 'cm-course',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {}
