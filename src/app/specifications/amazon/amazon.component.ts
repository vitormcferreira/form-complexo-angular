import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  output,
} from '@angular/core';
import { Specification } from '../../model/specification.model';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { AmazonForm } from './form.types';
import { FormService } from './form.service';
import { Attribute } from '../../model/attribute.model';

@Component({
  selector: 'app-amazon',
  standalone: true,
  imports: [CommonModule, FieldsetComponent],
  providers: [FormService],
  templateUrl: './amazon.component.html',
  styleUrl: './amazon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmazonComponent implements OnInit {
  attributes = input.required<Attribute[]>();
  specifications = input.required<Specification[]>();

  formReady = output<AmazonForm>();

  formService = inject(FormService);

  ngOnInit(): void {
    this.formService.init(this.attributes(), this.specifications());
    this.formReady.emit(this.formService.form);
  }
}
