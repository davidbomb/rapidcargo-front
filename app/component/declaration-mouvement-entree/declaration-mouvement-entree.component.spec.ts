import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationMouvementEntreeComponent } from './declaration-mouvement-entree.component';

describe('DeclarationMouvementEntreeComponent', () => {
  let component: DeclarationMouvementEntreeComponent;
  let fixture: ComponentFixture<DeclarationMouvementEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationMouvementEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationMouvementEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
