import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private formData: any = [];

  constructor() {}

  setFormData(data: object) {
    this.formData = data;
    console.log('Form Data Saved:', this.formData);
  }

  addFormData(data: object) {
    this.formData.push(data);
    console.log('Form Data Saved:', this.formData);
  }

  getFormData() {
    return this.formData;
  }
}
