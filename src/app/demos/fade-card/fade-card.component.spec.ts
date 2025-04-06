import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeCardComponent } from './fade-card.component';

describe('FadeCardComponent', () => {
  let component: FadeCardComponent;
  let fixture: ComponentFixture<FadeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
