import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryNotesComponent } from './story-notes.component';

describe('StoryNotesComponent', () => {
  let component: StoryNotesComponent;
  let fixture: ComponentFixture<StoryNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
