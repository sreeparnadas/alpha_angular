import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMpComponent } from './sidenav-mp.component';

describe('SidenavMpComponent', () => {
  let component: SidenavMpComponent;
  let fixture: ComponentFixture<SidenavMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavMpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
