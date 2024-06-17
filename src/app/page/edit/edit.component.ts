import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

interface Person {
  name: string;
  phoneNumber: string;
  province: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  personsData: Person[] = [];
  editForm: FormGroup;
  editingPersonIndex: number | null = null; // เก็บ index ของคนที่กำลังถูกแก้ไข

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.personsData = dataService.getFormData();
    console.log(this.personsData);

    this.editForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      province: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  startEdit(index: number) {
    this.editingPersonIndex = index;
    const person = this.personsData[index];
    this.editForm.setValue({
      name: person.name,
      phoneNumber: person.phoneNumber,
      province: person.province,
    });
  }

  saveEdit() {
    if (this.editForm.valid && this.editingPersonIndex !== null) {
      this.personsData[this.editingPersonIndex] = this.editForm.value;
      this.dataService.setFormData(this.personsData); // บันทึกข้อมูลกลับไปที่ DataService
      this.editingPersonIndex = null;
      this.editForm.reset();
    } else {
      alert('Invalid form - please fill in all required fields.');
    }
  }

  cancelEdit() {
    this.editingPersonIndex = null;
    this.editForm.reset();
  }
}
