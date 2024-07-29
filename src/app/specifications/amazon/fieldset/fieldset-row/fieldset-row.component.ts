import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecificationGroup } from '../../form.types';
import { FormService } from '../../form.service';
import { Attribute } from '../../../../model/attribute.model';

@Component({
  selector: 'app-fieldset-row',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fieldset-row.component.html',
  styleUrl: './fieldset-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetRowComponent implements OnInit {
  form = input.required<SpecificationGroup>();
  attributes = input.required<Attribute[]>();

  attribute!: Attribute;

  formService = inject(FormService);

  ngOnInit(): void {
    this.attribute = this.attributes().find(
      (a) => a.name === this.form().value.name
    )!;
  }

  removeField(index: number) {
    this.form().controls.values.removeAt(index);
  }

  addField() {
    const control = this.formService.createValuesArrayControl('');
    this.form().controls.values.push(control);
  }

  clearEmpty() {
    this.form()
      .value.values!.map((v, i) => ({ v, i }))
      .filter(({ v }) => !v.length) // vazios
      .reverse()
      .forEach(({ i }) => this.form().controls.values.removeAt(i));
  }
}
