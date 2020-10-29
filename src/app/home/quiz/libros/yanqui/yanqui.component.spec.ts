import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YanquiComponent } from './yanqui.component';

describe('YanquiComponent', () => {
  let component: YanquiComponent;
  let fixture: ComponentFixture<YanquiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YanquiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YanquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
