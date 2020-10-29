import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RobinsonCrusoeComponent } from './robinson-crusoe.component';

describe('RobinsonCrusoeComponent', () => {
  let component: RobinsonCrusoeComponent;
  let fixture: ComponentFixture<RobinsonCrusoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinsonCrusoeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RobinsonCrusoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
