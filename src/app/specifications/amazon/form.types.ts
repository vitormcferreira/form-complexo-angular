import { FormService } from './form.service';

export type AmazonForm = ReturnType<typeof FormService.prototype.createForm>;

export type SpecificationFieldset = ReturnType<
  typeof FormService.prototype.createFieldset
>;

export type SpecificationGroup = ReturnType<
  typeof FormService.prototype.createGroup
>;

export type ValuesArray = ReturnType<
  typeof FormService.prototype.createValuesArray
>;

export type ValuesArrayControl = ReturnType<
  typeof FormService.prototype.createValuesArrayControl
>;
