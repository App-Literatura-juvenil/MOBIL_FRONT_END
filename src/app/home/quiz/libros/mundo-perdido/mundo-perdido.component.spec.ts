import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MundoPerdidoComponent } from './mundo-perdido.component';

describe('MundoPerdidoComponent', () => {
  let component: MundoPerdidoComponent;
  let fixture: ComponentFixture<MundoPerdidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundoPerdidoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MundoPerdidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
