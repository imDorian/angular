import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDetailPageComponent } from './characters-detail-page.component';

describe('CharactersDetailPageComponent', () => {
  let component: CharactersDetailPageComponent;
  let fixture: ComponentFixture<CharactersDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
