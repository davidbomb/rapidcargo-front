import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueDesMouvementsComponent } from './historique-des-mouvements.component';

describe('HistoriqueDesMouvementsComponent', () => {
  let component: HistoriqueDesMouvementsComponent;
  let fixture: ComponentFixture<HistoriqueDesMouvementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueDesMouvementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueDesMouvementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
