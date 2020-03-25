import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageResellerComponent } from './page-reseller.component';

describe('PageResellerComponent', () => {
  let component: PageResellerComponent;
  let fixture: ComponentFixture<PageResellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageResellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageResellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
