import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionValideComponent } from './connexion-valide.component';

describe('ConnexionValideComponent', () => {
  let component: ConnexionValideComponent;
  let fixture: ComponentFixture<ConnexionValideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionValideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
