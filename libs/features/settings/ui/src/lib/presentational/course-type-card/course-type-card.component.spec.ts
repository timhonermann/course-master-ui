import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseTypeCardComponent } from './course-type-card.component';

describe('CourseTypeCardComponent', () => {
  let component: CourseTypeCardComponent;
  let fixture: ComponentFixture<CourseTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTypeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
