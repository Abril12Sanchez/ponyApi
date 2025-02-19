import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPonisComponent } from './list-of-ponis.component';

describe('ListOfPonisComponent', () => {
  let component: ListOfPonisComponent;
  let fixture: ComponentFixture<ListOfPonisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfPonisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfPonisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
