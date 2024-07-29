export interface Attribute {
  name: string;
  values: string[];
  groupName: string;
  attrType: AttrType;
}

export type AttrType = 'MULTISELECT' | 'SELECT' | 'TEXT';
