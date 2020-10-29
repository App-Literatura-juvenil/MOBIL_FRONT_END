import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndiasNegrasComponent } from './indias-negras.component';

describe('IndiasNegrasComponent', () => {
  let component: IndiasNegrasComponent;
  let fixture: ComponentFixture<IndiasNegrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiasNegrasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiasNegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
