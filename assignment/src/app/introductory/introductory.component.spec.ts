import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductoryComponent } from './introductory.component';

describe('IntroductoryComponent', () => {
  let component: IntroductoryComponent;
  let fixture: ComponentFixture<IntroductoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
