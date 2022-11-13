import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComicsComponent } from './detail-comics.component';

describe('DetailComicsComponent', () => {
  let component: DetailComicsComponent;
  let fixture: ComponentFixture<DetailComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
