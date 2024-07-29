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
import { FormRowComponent } from './form-row/form-row.component';
import { DefaultForm } from './form.types';
import { FormService } from './form.service';
import { Attribute } from '../../model/attribute.model';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, FormRowComponent],
  providers: [FormService],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent implements OnInit {
  attributes = input.required<Attribute[]>();
  specifications = input.required<Specification[]>();

  formReady = output<DefaultForm>();

  formService = inject(FormService);

  ngOnInit(): void {
    this.formService.init(this.specifications());
    this.formReady.emit(this.formService.form);
  }
}
