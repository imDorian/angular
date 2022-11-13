import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPopComponent } from './btn-pop.component';

describe('BtnPopComponent', () => {
  let component: BtnPopComponent;
  let fixture: ComponentFixture<BtnPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
