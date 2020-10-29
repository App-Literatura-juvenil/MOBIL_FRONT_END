import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TigresMalasiaComponent } from './tigres-malasia.component';

describe('TigresMalasiaComponent', () => {
  let component: TigresMalasiaComponent;
  let fixture: ComponentFixture<TigresMalasiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TigresMalasiaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TigresMalasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
