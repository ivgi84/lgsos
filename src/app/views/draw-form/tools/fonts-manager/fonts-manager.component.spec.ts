import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsManagerComponent } from './fonts-manager.component';

describe('FontsManagerComponent', () => {
  let component: FontsManagerComponent;
  let fixture: ComponentFixture<FontsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
