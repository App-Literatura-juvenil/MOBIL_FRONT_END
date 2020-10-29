import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IslaTesoroComponent } from './isla-tesoro.component';

describe('IslaTesoroComponent', () => {
  let component: IslaTesoroComponent;
  let fixture: ComponentFixture<IslaTesoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslaTesoroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IslaTesoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
