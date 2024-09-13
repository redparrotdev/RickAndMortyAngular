import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoViewComponent } from './character-info-view.component';

describe('CharacterInfoViewComponent', () => {
  let component: CharacterInfoViewComponent;
  let fixture: ComponentFixture<CharacterInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterInfoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
