import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
} from '@angular/core';
import { AmazonComponent } from './amazon/amazon.component';
import { DefaultComponent } from './default/default.component';
import { Specification } from '../model/specification.model';
import { NonNullableFormBuilder } from '@angular/forms';
import { AmazonForm } from './amazon/form.types';
import { DefaultForm } from './default/form.types';
import { Attribute } from '../model/attribute.model';

@Component({
  selector: 'app-specifications',
  standalone: true,
  imports: [CommonModule, AmazonComponent, DefaultComponent],
  templateUrl: './specifications.component.html',
  styleUrl: './specifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecificationsComponent {
  attributes = input.required<Attribute[]>();
  specifications = input.required<Specification[]>();

  activeFormName: 'amazon' | 'default' = 'amazon';

  result: Partial<Specification>[] = [];

  fb = inject(NonNullableFormBuilder);
  cd = inject(ChangeDetectorRef);

  amazonFormReady(form: AmazonForm) {
    const mapper = (f: AmazonForm) =>
      Object.entries(f.value)
        .flatMap(([_, v]) => v!)
        .map(({ name, values }) => {
          values = values?.filter((v) => !v);
          return { name, values };
        })
        .filter(({ values }) => values?.length)
        .sort((a: any, b: any) => a.name.localeCompare(b.name));

    this.result = mapper(form);
    form.valueChanges.subscribe(() => {
      this.result = mapper(form);
    });

    this.cd.detectChanges(); // atualiza o json na primeira vez
  }

  defaultFormReady(form: DefaultForm) {
    const mapper = (f: DefaultForm) =>
      [...f.value]
        .map(({ name, values }) => {
          values = values?.filter((v) => !v);
          return { name, values };
        })
        .filter(({ values }) => values?.length)
        .sort((a, b) => a.name!.localeCompare(b.name!));

    this.result = mapper(form);
    form.valueChanges.subscribe(() => {
      this.result = mapper(form);
    });

    this.cd.detectChanges(); // atualiza o json na primeira vez
  }

  setActive(name: typeof this.activeFormName) {
    this.activeFormName = name;
  }

  persist() {
    alert('AEEEEEEEE');
    console.log(this.result);
  }
}
