import { inject, Injectable } from '@angular/core';
import { Specification } from '../../model/specification.model';
import { AmazonForm, SpecificationFieldset, ValuesArray } from './form.types';
import { AbstractControl, NonNullableFormBuilder } from '@angular/forms';
import { Attribute } from '../../model/attribute.model';

@Injectable()
export class FormService {
  fb = inject(NonNullableFormBuilder);

  form!: AmazonForm;

  init(attributes: Attribute[], specifications: Specification[]): void {
    this.form = this.createForm(attributes, specifications);
  }

  createForm = (attributes: Attribute[], specifications: Specification[]) => {
    const record = this.fb.record<SpecificationFieldset>({});
    for (const attribute of attributes) {
      if (!record.contains(attribute.groupName)) {
        record.addControl(
          attribute.groupName,
          this.createFieldset(attribute, [])
        );
      }
      const specification = specifications.find(
        (s) => s.name === attribute.name
      );
      if (specification) {
        record.controls[attribute.groupName].push(
          this.createGroup(attribute, specification)
        );
      } else {
        record.controls[attribute.groupName].push(
          this.createGroup(attribute, { name: attribute.name, values: [] })
        );
      }
    }
    return record;
  };

  createFieldset = (attribute: Attribute, specifications: Specification[]) => {
    return this.fb.array(
      specifications.map((s) => this.createGroup(attribute, s))
    );
  };

  createGroup = (a: Attribute, s: Specification) => {
    const values =
      a.attrType === 'MULTISELECT'
        ? s.values
        : s.values.length
        ? s.values
        : [''];

    return this.fb.group({
      name: this.fb.control(s.name),
      values: this.createValuesArray(values),
    });
  };

  createValuesArray = (values: string[]) => {
    return this.fb.array(values.map(this.createValuesArrayControl));
  };

  createValuesArrayControl = (value: string) => {
    const alreadySelected = (control: AbstractControl) => {
      if (!control.value) return null; // string vazia
      const array = control.parent as ValuesArray | undefined;
      if (!array) return null;
      for (const arrayControl of array.controls) {
        const sameValue = arrayControl.value === control.value;
        const isMe = arrayControl === control;
        if (sameValue && !isMe) {
          return { alreadySelected: true };
        }
      }
      return null;
    };
    return this.fb.control(value, { validators: [alreadySelected] });
  };
}
