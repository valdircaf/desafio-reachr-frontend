import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateVagaComponent } from './form-update-vaga.component';

describe('FormUpdateVagaComponent', () => {
  let component: FormUpdateVagaComponent;
  let fixture: ComponentFixture<FormUpdateVagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormUpdateVagaComponent]
    });
    fixture = TestBed.createComponent(FormUpdateVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
