import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsListAddComponent} from './news-list-add.component';

describe('NewsAddFormComponent', () => {
  let component: NewsListAddComponent;
  let fixture: ComponentFixture<NewsListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsListAddComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
