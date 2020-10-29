import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TierraLunaComponent } from './tierra-luna.component';

describe('TierraLunaComponent', () => {
  let component: TierraLunaComponent;
  let fixture: ComponentFixture<TierraLunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierraLunaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TierraLunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
