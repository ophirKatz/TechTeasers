import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserForumComponent } from './teaser-forum.component';

describe('TeaserForumComponent', () => {
  let component: TeaserForumComponent;
  let fixture: ComponentFixture<TeaserForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaserForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
