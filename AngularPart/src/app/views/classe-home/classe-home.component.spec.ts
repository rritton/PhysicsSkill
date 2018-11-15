import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseHomeComponent } from './classe-home.component';

describe('ClasseHomeComponent', () => {
  let component: ClasseHomeComponent;
  let fixture: ComponentFixture<ClasseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
