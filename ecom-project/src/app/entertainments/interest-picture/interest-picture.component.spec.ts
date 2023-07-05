import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPictureComponent } from './interest-picture.component';

describe('InterestPictureComponent', () => {
  let component: InterestPictureComponent;
  let fixture: ComponentFixture<InterestPictureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestPictureComponent]
    });
    fixture = TestBed.createComponent(InterestPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
