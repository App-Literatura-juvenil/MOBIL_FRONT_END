import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LlamadaSalvajeComponent } from './llamada-salvaje.component';

describe('LlamadaSalvajeComponent', () => {
  let component: LlamadaSalvajeComponent;
  let fixture: ComponentFixture<LlamadaSalvajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlamadaSalvajeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LlamadaSalvajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
