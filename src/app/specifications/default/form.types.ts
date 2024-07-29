import { FormService } from './form.service';

export type DefaultForm = ReturnType<typeof FormService.prototype.createForm>;

export type SpecificationGroup = ReturnType<
  typeof FormService.prototype.createGroup
>;
