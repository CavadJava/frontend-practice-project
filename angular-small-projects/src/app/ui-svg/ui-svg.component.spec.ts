import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSvgComponent } from './ui-svg.component';

describe('UiSvgComponent', () => {
  let component: UiSvgComponent;
  let fixture: ComponentFixture<UiSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
