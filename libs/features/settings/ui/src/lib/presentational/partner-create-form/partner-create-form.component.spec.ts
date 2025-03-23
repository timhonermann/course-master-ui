import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerCreateFormComponent } from './partner-create-form.component';

describe('PartnerCreateFormComponent', () => {
  let component: PartnerCreateFormComponent;
  let fixture: ComponentFixture<PartnerCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerCreateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
