import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsetRowComponent } from './fieldset-row/fieldset-row.component';
import { SpecificationFieldset } from '../form.types';
import { Attribute } from '../../../model/attribute.model';

@Component({
  selector: 'app-fieldset',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldsetRowComponent],
  templateUrl: './fieldset.component.html',
  styleUrl: './fieldset.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetComponent {
  groupName = input.required<string>();
  form = input.required<SpecificationFieldset>();
  attributes = input.required<Attribute[]>();
}
