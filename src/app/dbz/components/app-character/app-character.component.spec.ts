import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCharacterComponent } from './app-character.component';

describe('AppCharacterComponent', () => {
  let component: AppCharacterComponent;
  let fixture: ComponentFixture<AppCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCharacterComponent]
    });
    fixture = TestBed.createComponent(AppCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
