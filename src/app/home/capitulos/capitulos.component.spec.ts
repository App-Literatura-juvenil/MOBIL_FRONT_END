import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapitulosComponent } from './capitulos.component';

describe('CapitulosComponent', () => {
  let component: CapitulosComponent;
  let fixture: ComponentFixture<CapitulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitulosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CapitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
