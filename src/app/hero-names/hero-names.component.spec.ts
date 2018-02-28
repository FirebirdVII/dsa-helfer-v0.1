import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNamesComponent } from './hero-names.component';

describe('HeroNamesComponent', () => {
  let component: HeroNamesComponent;
  let fixture: ComponentFixture<HeroNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
