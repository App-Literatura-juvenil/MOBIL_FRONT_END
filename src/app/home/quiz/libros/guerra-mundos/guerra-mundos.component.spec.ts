import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuerraMundosComponent } from './guerra-mundos.component';

describe('GuerraMundosComponent', () => {
  let component: GuerraMundosComponent;
  let fixture: ComponentFixture<GuerraMundosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuerraMundosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuerraMundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
