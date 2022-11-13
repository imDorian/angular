import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComicsComponent } from './gallery-comics.component';

describe('GalleryComicsComponent', () => {
  let component: GalleryComicsComponent;
  let fixture: ComponentFixture<GalleryComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
