import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'cm-course-type-create-form',
  imports: [
    CommonModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './course-type-create-form.component.html',
  styleUrl: './course-type-create-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseTypeCreateFormComponent {
  readonly courseTypeCreationTriggered = output<string>();

  readonly courseTypeControl = new FormControl('', [Validators.required]);

  onCreateCourseTypeTriggered(): void {
    const name = this.courseTypeControl.value ?? '';

    this.courseTypeCreationTriggered.emit(name);
  }
}
