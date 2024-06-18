import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  items: string[] = [
    'ปทุมธานี',
    'กรุงเทพ',
    'นนทบุรี',
    'ลพบุรี',
    'สมุทรปราการ',
    'พระนครศรีอยุธยา',
  ];
  filteredItems: string[] = [];
  searchText: string = '';
  dropdownVisible: boolean = false;
  readOnly: boolean = false;

  private onChange: any = () => {};
  private onTouched: any = () => {};

  constructor() {
    this.filteredItems = this.items;
  }

  filterItems() {
    this.filteredItems = this.items.filter((item) =>
      item.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  selectItem(item: string) {
    this.searchText = item;
    this.onChange(this.searchText); // ส่งค่า searchText ที่ถูกเลือกไปยัง onChange
    this.filteredItems = [];
    this.dropdownVisible = false;
  }

  handleChange() {
    if (!this.items.includes(this.searchText.toLocaleLowerCase())) {
      this.onChange(null);
    }
    console.log(this.searchText);
  }
  showDropdown() {
    this.dropdownVisible = true;
    this.filteredItems = this.items; // แสดงรายการทั้งหมดเมื่อแสดง dropdown
  }

  hideDropdown() {
    this.dropdownVisible = false; // ซ่อน dropdown โดยไม่ต้องใช้ setTimeout
  }

  writeValue(value: any): void {
    this.searchText = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}
}
