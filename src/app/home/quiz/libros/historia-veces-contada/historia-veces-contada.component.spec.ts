import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoriaVecesContadaComponent } from './historia-veces-contada.component';

describe('HistoriaVecesContadaComponent', () => {
  let component: HistoriaVecesContadaComponent;
  let fixture: ComponentFixture<HistoriaVecesContadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriaVecesContadaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriaVecesContadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
