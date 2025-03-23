import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseTypeListComponent } from './course-type-list.component';

describe('CourseTypeListComponent', () => {
  let component: CourseTypeListComponent;
  let fixture: ComponentFixture<CourseTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTypeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
