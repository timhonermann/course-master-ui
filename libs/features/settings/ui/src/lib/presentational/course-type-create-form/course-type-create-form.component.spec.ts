import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseTypeCreateFormComponent } from './course-type-create-form.component';

describe('CourseTypeCreateFormComponent', () => {
  let component: CourseTypeCreateFormComponent;
  let fixture: ComponentFixture<CourseTypeCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTypeCreateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseTypeCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
