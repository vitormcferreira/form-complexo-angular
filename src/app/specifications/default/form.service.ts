import { inject, Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Specification } from '../../model/specification.model';
import { DefaultForm } from './form.types';

@Injectable()
export class FormService {
  fb = inject(NonNullableFormBuilder);

  form!: DefaultForm;

  init(specifications: Specification[]) {
    this.form = this.createForm(specifications);
  }

  createForm = (specifications: Specification[]) => {
    return this.fb.array(specifications.map(this.createGroup));
  };

  createGroup = (s: Specification) => {
    return this.fb.group({
      name: this.fb.control(s.name),
      values: this.fb.control(s.values),
    });
  };
}
