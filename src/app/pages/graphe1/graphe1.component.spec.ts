import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe1Component } from './graphe1.component';

describe('Graphe1Component', () => {
  let component: Graphe1Component;
  let fixture: ComponentFixture<Graphe1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
