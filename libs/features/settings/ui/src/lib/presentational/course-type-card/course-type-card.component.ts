import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { CourseType } from '@course-master/shared/course-type/model';

@Component({
  selector: 'cm-course-type-card',
  imports: [
    CommonModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
  ],
  templateUrl: './course-type-card.component.html',
  styleUrl: './course-type-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseTypeCardComponent {
  readonly courseType = input.required<CourseType>();

  readonly deleteClicked = output();

  onDeleteClicked(): void {
    this.deleteClicked.emit();
  }
}
