import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddVagaComponent } from './form-add-vaga.component';

describe('FormAddVagaComponent', () => {
  let component: FormAddVagaComponent;
  let fixture: ComponentFixture<FormAddVagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddVagaComponent]
    });
    fixture = TestBed.createComponent(FormAddVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
