import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

interface Person {
  name: string;
  phoneNumber: string;
  province: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  personsData: Person[] = [];
  submitted: boolean = false;
  form: FormGroup;

  editingPersonIndex: number | null = null;
  personToForm = {};
  @Input('editForm') editForm = false;
  personIndex = 0;

  @Output()
  editingFinished = new EventEmitter<number | null>();

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      province: ['', Validators.required],
    });
    this.personsData = dataService.getFormData();
  }

  startEdit() {
    this.editingPersonIndex = this.personIndex;
    const person = this.personsData[this.personIndex];
    this.form.setValue({
      name: person.name,
      phoneNumber: person.phoneNumber,
      province: person.province,
    });
  }

  cancelEdit() {
    this.editingPersonIndex = null;
    this.form.reset();
  }

  onSubmit() {
    if (this.form.valid && this.editingPersonIndex == null) {
      console.log('Form Data:', this.form.value);
      this.dataService.addFormData(this.form.value);
      this.form.reset();
    } else if (this.form.valid && this.editingPersonIndex !== null) {
      this.personsData[this.editingPersonIndex] = this.form.value;
      this.dataService.setFormData(this.personsData); // บันทึกข้อมูลกลับไปที่ DataService
      this.editingPersonIndex = null;
      console.log(this.editingPersonIndex);
      this.editingFinished.emit(null);
      this.form.reset();
    } else {
      this.submitted = true;
      alert('Invalid form - please fill in all required fields.');
    }
    // คุณสามารถทำการเก็บค่าของฟอร์ม หรือส่งข้อมูลไปยังเซิร์ฟเวอร์ได้ที่นี่
  }

  ngOnInit(): void {
    console.log('this is data:', this.personsData);
    console.log('this is person to form:', this.personToForm);
    console.log('this is edit form:', this.editForm);
    console.log('this is person index', this.personIndex);
  }
}
