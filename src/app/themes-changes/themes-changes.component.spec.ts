import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesChangesComponent } from './themes-changes.component';

describe('ThemesChangesComponent', () => {
  let component: ThemesChangesComponent;
  let fixture: ComponentFixture<ThemesChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
