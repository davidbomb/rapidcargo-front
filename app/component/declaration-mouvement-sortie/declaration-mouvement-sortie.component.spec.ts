import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationMouvementSortieComponent } from './declaration-mouvement-sortie.component';

describe('DeclarationMouvementSortieComponent', () => {
  let component: DeclarationMouvementSortieComponent;
  let fixture: ComponentFixture<DeclarationMouvementSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationMouvementSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationMouvementSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
