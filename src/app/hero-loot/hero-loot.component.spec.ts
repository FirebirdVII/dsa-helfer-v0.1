import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLootComponent } from './hero-loot.component';

describe('HeroLootComponent', () => {
  let component: HeroLootComponent;
  let fixture: ComponentFixture<HeroLootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroLootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroLootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
