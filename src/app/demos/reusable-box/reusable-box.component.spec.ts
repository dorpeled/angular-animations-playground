import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableBoxComponent } from './reusable-box.component';

describe('ReusableBoxComponent', () => {
  let component: ReusableBoxComponent;
  let fixture: ComponentFixture<ReusableBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
