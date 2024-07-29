import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpecificationsComponent } from './specifications/specifications.component';
import { Specification } from './model/specification.model';
import { Attribute } from './model/attribute.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    SpecificationsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  attributes: Attribute[] = [
    {
      name: 'Color',
      values: ['Red', 'Green', 'Blue'],
      groupName: 'Appearance',
      attrType: 'MULTISELECT',
    },
    {
      name: 'Size',
      values: ['Small', 'Medium', 'Large'],
      groupName: 'Appearance',
      attrType: 'SELECT',
    },
    {
      name: 'Material',
      values: ['Cotton', 'Wool', 'Polyester'],
      groupName: 'Material',
      attrType: 'MULTISELECT',
    },
    {
      name: 'Brand',
      values: ['Nike', 'Adidas', 'Puma'],
      groupName: 'Brand',
      attrType: 'SELECT',
    },
    {
      name: 'Model',
      values: ['A', ' B', 'C'],
      groupName: 'Product',
      attrType: 'SELECT',
    },
    {
      name: 'Price Range',
      values: ['0-100', '100-200', '200+'],
      groupName: 'Price',
      attrType: 'SELECT',
    },
    {
      name: 'Product Name',
      values: [],
      groupName: 'Product',
      attrType: 'TEXT',
    },
    {
      name: 'Category',
      values: ['Electronics', 'Clothing', 'Home'],
      groupName: 'Product',
      attrType: 'SELECT',
    },
    {
      name: 'Description',
      values: [],
      groupName: 'Product',
      attrType: 'TEXT',
    },
    {
      name: 'Keywords',
      values: [],
      groupName: 'SEO',
      attrType: 'TEXT',
    },
    {
      name: 'Meta Title',
      values: [],
      groupName: 'SEO',
      attrType: 'TEXT',
    },
    {
      name: 'Meta Description',
      values: [],
      groupName: 'SEO',
      attrType: 'TEXT',
    },
    {
      name: 'Shipping Weight',
      values: [],
      groupName: 'Shipping',
      attrType: 'TEXT',
    },
    {
      name: 'Dimensions',
      values: [],
      groupName: 'Shipping',
      attrType: 'TEXT',
    },
    {
      name: 'Shipping Carrier',
      values: ['UPS', 'FedEx', 'DHL'],
      groupName: 'Shipping',
      attrType: 'MULTISELECT',
    },
    {
      name: 'Shipping Service',
      values: ['Standard', 'Expedited', 'Overnight'],
      groupName: 'Shipping',
      attrType: 'SELECT',
    },
    {
      name: 'Inventory',
      values: [],
      groupName: 'Inventory',
      attrType: 'TEXT',
    },
    {
      name: 'SKU',
      values: [],
      groupName: 'Product',
      attrType: 'TEXT',
    },
    {
      name: 'UPC',
      values: [],
      groupName: 'Product',
      attrType: 'TEXT',
    },
    {
      name: 'EAN',
      values: [],
      groupName: 'Product',
      attrType: 'TEXT',
    },
  ];

  specifications: Specification[] = [
    {
      name: 'Color',
      values: ['Red', 'Green'],
    },
    {
      name: 'Size',
      values: ['Medium'],
    },
    {
      name: 'Material',
      values: ['Polyester'],
    },
    {
      name: 'Brand',
      values: ['Nike'],
    },
    {
      name: 'Model',
      values: [],
    },
    {
      name: 'Price Range',
      values: ['200+'],
    },
    {
      name: 'Product Name',
      values: [],
    },
    {
      name: 'Category',
      values: ['Electronics'],
    },
    {
      name: 'Description',
      values: ['A great description'],
    },
    {
      name: 'Keywords',
      values: [],
    },
    {
      name: 'Meta Title',
      values: [],
    },
    {
      name: 'Meta Description',
      values: [],
    },
    {
      name: 'Shipping Weight',
      values: [],
    },
    {
      name: 'Dimensions',
      values: [],
    },
    {
      name: 'Shipping Carrier',
      values: ['UPS', 'FedEx', 'DHL'],
    },
    {
      name: 'Shipping Service',
      values: ['Overnight'],
    },
    // {
    //   name: 'Inventory',
    //   values: [],
    // },
    // {
    //   name: 'SKU',
    //   values: ['SKU-ABC123'],
    // },
    // {
    //   name: 'UPC',
    //   values: [],
    // },
    // {
    //   name: 'EAN',
    //   values: [],
    // },
  ];
}
