import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecificationGroup } from '../form.types';
import { Attribute } from '../../../model/attribute.model';

@Component({
  selector: 'app-form-row',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-row.component.html',
  styleUrl: './form-row.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRowComponent implements OnInit {
  attributes = input.required<Attribute[]>();
  form = input.required<SpecificationGroup>();

  attribute!: Attribute;

  ngOnInit(): void {
    this.attribute = this.attributes().find(
      (a) => a.name === this.form().value.name
    )!;
  }
}
