import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpLevelComponent } from './mp-level.component';

describe('MpLevelComponent', () => {
  let component: MpLevelComponent;
  let fixture: ComponentFixture<MpLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
